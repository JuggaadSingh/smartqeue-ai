import { useEffect, useState } from "react";
import api from "../services/api";
import QueueCard from "./QueueCard";
import EditQueueModal from "./EditQueueModel";
import AddQueueModal from "./AddQueueModel";

function HeroSection() {
  const [queues, setQueues] = useState([]);
  const [selectedQueue, setSelectedQueue] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    loadQueues();
  }, []);

  // ===========================
  // LOAD QUEUES
  // ===========================
  const loadQueues = async () => {
    try {
      const res = await api.get("/queues");
      setQueues(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  // ===========================
  // ADD HOSPITAL
  // ===========================
  const handleAddQueue = async (newQueue) => {
    try {
      await api.post("/queue", {
        ...newQueue,
        currentQueue: Number(newQueue.currentQueue),
      });

      setIsAddModalOpen(false);

      await loadQueues();

      alert("✅ Hospital added successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add hospital.");
    }
  };

  // ===========================
  // OPEN EDIT MODAL
  // ===========================
  const handleEdit = (queue) => {
    setSelectedQueue(queue);
    setIsModalOpen(true);
  };

  // ===========================
  // UPDATE
  // ===========================
  const handleSave = async (updatedQueue) => {
    try {
      await api.put("/queue", updatedQueue);

      setIsModalOpen(false);

      await loadQueues();

      alert("✅ Queue updated successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to update queue.");
    }
  };

  // ===========================
  // DELETE
  // ===========================
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

      alert("✅ Queue deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to delete queue.");
    }
  };

  // ===========================
  // SEARCH + FILTER
  // ===========================
  const filteredQueues = queues.filter((queue) => {
    const matchesSearch = queue.organization
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      queue.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-8">

        {/* Hero */}

        <div className="text-center mb-10">

          <h1 className="text-6xl font-extrabold text-blue-700 mb-4">
            SmartQueue AI
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intelligent Hospital Queue Management powered by AWS
            Lambda, API Gateway, DynamoDB and Artificial Intelligence.
          </p>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg shadow-lg"
          >
            + Add Hospital
          </button>

        </div>

        {/* Search + Filter */}

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">

          <input
            type="text"
            placeholder="🔍 Search Hospital..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-96 p-4 rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-4 rounded-xl border border-gray-300 shadow"
          >
            <option>All</option>
            <option>Open</option>
            <option>Closed</option>
          </select>

        </div>

        {/* Queue Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredQueues.length === 0 ? (

            <div className="col-span-full text-center text-gray-500 text-xl">
              No hospitals found.
            </div>

          ) : (

            filteredQueues.map((queue) => (
              <QueueCard
                key={queue.queueId}
                queue={queue}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))

          )}

        </div>

      </div>

      {/* Edit Modal */}

      {isModalOpen && (
        <EditQueueModal
          queue={selectedQueue}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}

      {/* Add Modal */}

      {isAddModalOpen && (
        <AddQueueModal
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleAddQueue}
        />
      )}

    </section>
  );
}

export default HeroSection;