import { useEffect, useState } from "react";
import api from "../services/api";
import QueueCard from "./QueueCard";
import EditQueueModal from "./EditQueueModel";

function HeroSection() {
  const [queues, setQueues] = useState([]);
  const [selectedQueue, setSelectedQueue] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadQueues();
  }, []);

  const loadQueues = async () => {
    try {
      const res = await api.get("/queues");
      setQueues(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const createQueue = async () => {
    try {
      await api.post("/queue", {
        queueId: "H00" + (queues.length + 1),
        organization: "Hospital " + (queues.length + 1),
        currentQueue: Math.floor(Math.random() * 25) + 5,
        estimatedWait:
          Math.floor(Math.random() * 30) + 10 + " minutes",
        status: "Open",
      });

      loadQueues();
    } catch (err) {
      console.error(err);
      alert("Unable to create queue.");
    }
  };

  const handleEdit = (queue) => {
    setSelectedQueue(queue);
    setIsModalOpen(true);
  };

  const handleDelete = async (queue) => {
  const confirmDelete = window.confirm(
    `Delete ${queue.organization}?`
  );

  if (!confirmDelete) return;

  try {
    await api.delete("/queue", {
      data: {
        queueId: queue.queueId,
      },
    });

    await loadQueues();

    alert("Queue deleted successfully!");
  } catch (err) {
    console.error(err);
    alert("Failed to delete queue.");
  }
};

  const handleSave = async (updatedQueue) => {
  try {
    const response = await api.put("/queue", updatedQueue);

    console.log(response.data);

    setIsModalOpen(false);

    await loadQueues();

    alert("✅ Queue updated successfully!");

  } catch (err) {
    console.error(err);
    alert("❌ Failed to update queue.");
  }
};

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-12">

          <h1 className="text-6xl font-extrabold text-blue-700 mb-4">
            SmartQueue AI
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intelligent Hospital Queue Management powered by AWS Lambda,
            API Gateway, DynamoDB and Artificial Intelligence.
          </p>

          <button
            onClick={createQueue}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg shadow-lg"
          >
            + Add Sample Queue
          </button>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {queues.map((queue) => (
            <QueueCard
              key={queue.queueId}
              queue={queue}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}

        </div>

      </div>

      {isModalOpen && (
        <EditQueueModal
          queue={selectedQueue}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </section>
  );
}

export default HeroSection;