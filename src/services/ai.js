import api from "./api";

export const generatePrediction = async (queue) => {
  const response = await api.post("/predict", {
    organization: queue.organization,
    currentQueue: queue.currentQueue,
    estimatedWait: queue.estimatedWait,
    doctorsAvailable: queue.doctorsAvailable,
    hospitalCapacity: queue.hospitalCapacity,
    emergencyCases: queue.emergencyCases,
    averageServiceTime: queue.averageServiceTime,
  });

  // API Gateway HTTP API
  if (response.data.body) {
    return JSON.parse(response.data.body).prediction;
  }

  // Direct response
  return response.data.prediction;
};