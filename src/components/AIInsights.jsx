import { useState } from "react";
import { generatePrediction } from "../services/ai";

function AIInsights({ queue }) {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePrediction = async () => {
    try {
      setLoading(true);
      setError("");

      const result = await generatePrediction(queue);

      setPrediction(result);
    } catch (err) {
      console.error(err);
      setError("Failed to generate AI prediction.");
    } finally {
      setLoading(false);
    }
  };

  const riskColor = (risk) => {
    switch (risk) {
      case "Low":
        return "bg-green-100 text-green-700";

      case "Medium":
        return "bg-yellow-100 text-yellow-700";

      case "High":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="mt-8 rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50 p-5">

      <div className="flex items-center justify-between mb-4">

        <h3 className="text-xl font-bold text-blue-700">
          🤖 AI Insights
        </h3>

        <button
          onClick={handlePrediction}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-xl font-semibold transition"
        >
          {loading ? "Analyzing..." : prediction ? "Refresh" : "Generate"}
        </button>

      </div>

      {loading && (
        <div className="bg-white rounded-xl p-6 text-center shadow">

          <div className="text-4xl mb-3">
            🤖
          </div>

          <p className="text-blue-700 font-semibold">
            AI is analyzing hospital queue...
          </p>

        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-700 rounded-xl p-4">
          {error}
        </div>
      )}

      {!loading && prediction && (
        <div className="space-y-4">

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-white rounded-xl p-4 shadow">

              <p className="text-gray-500 text-sm">
                👥 Predicted Queue
              </p>

              <h3 className="text-3xl font-bold text-blue-700 mt-2">
                {prediction.predictedQueue}
              </h3>

            </div>

            <div className="bg-white rounded-xl p-4 shadow">

              <p className="text-gray-500 text-sm">
                ⏱ Predicted Wait
              </p>

              <h3 className="text-2xl font-bold text-orange-600 mt-2">
                {prediction.predictedWait}
              </h3>

            </div>

          </div>

          <div className="bg-white rounded-xl p-4 shadow">

            <p className="text-gray-500 text-sm">
              🕒 Recommended Arrival
            </p>

            <h3 className="text-xl font-bold text-green-700 mt-2">
              {prediction.recommendedArrival}
            </h3>

          </div>

          <div className="bg-white rounded-xl p-4 shadow flex justify-between items-center">

            <p className="font-semibold">
              Risk Level
            </p>

            <span
              className={`px-4 py-2 rounded-full font-bold ${riskColor(
                prediction.riskLevel
              )}`}
            >
              {prediction.riskLevel}
            </span>

          </div>

          <div className="bg-white rounded-xl p-4 shadow">

            <p className="text-gray-500 text-sm mb-2">
              💡 Recommendation
            </p>

            <p className="text-gray-700 leading-relaxed">
              {prediction.recommendation}
            </p>

          </div>

        </div>
      )}

      {!loading && !prediction && !error && (
        <div className="bg-white rounded-xl p-6 text-center shadow">

          <div className="text-5xl mb-4">
            🧠
          </div>

          <p className="text-gray-600">
            Click <strong>Generate</strong> to receive an
            AI-powered prediction from Amazon Bedrock.
          </p>

        </div>
      )}

    </div>
  );
}

export default AIInsights;