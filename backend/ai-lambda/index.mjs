import {
  BedrockRuntimeClient,
  ConverseCommand,
} from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntimeClient({
  region: "ap-south-1",
});

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Methods": "POST,OPTIONS",
  "Content-Type": "application/json",
};

export const handler = async (event) => {
  try {
    // Detect request method safely
    const method = event?.requestContext?.http?.method || "POST";

    // Handle CORS preflight
    if (method === "OPTIONS") {
      return {
        statusCode: 200,
        headers,
        body: "",
      };
    }

    // Parse request body safely
    let body;

    if (typeof event.body === "string") {
      body = JSON.parse(event.body);
    } else if (typeof event.body === "object") {
      body = event.body;
    } else {
      body = event;
    }

   const prompt = `
You are an AI hospital queue prediction assistant.

Analyze the hospital information below and estimate the future queue situation.

Hospital Data:
${JSON.stringify(body, null, 2)}

Rules:
- Use ONLY the provided data.
- Higher current queue generally means longer waiting time.
- More doctors available generally means shorter waiting time.
- More emergency cases increase the risk level.
- Higher hospital capacity can reduce congestion.
- Make realistic predictions.
- Generate a different recommendation depending on the data.
- Return ONLY valid JSON.

Return this exact JSON structure:

{
  "predictedQueue": number,
  "predictedWait": "string",
  "recommendedArrival": "string",
  "riskLevel": "Low | Medium | High",
  "recommendation": "string"
}
`;

    const command = new ConverseCommand({
      modelId: "apac.amazon.nova-micro-v1:0",

      messages: [
        {
          role: "user",
          content: [
            {
              text: prompt,
            },
          ],
        },
      ],

      inferenceConfig: {
        temperature: 0.2,
        maxTokens: 250,
      },
    });

    const response = await client.send(command);

    const aiText = response.output.message.content[0].text;

    let prediction;

    try {
      prediction = JSON.parse(aiText);
    } catch {
      prediction = {
        rawResponse: aiText,
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        prediction,
      }),
    };
  } catch (err) {
    console.error(err);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: err.message,
        stack: err.stack,
      }),
    };
  }
};