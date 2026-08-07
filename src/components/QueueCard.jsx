import AIInsights from "./AIInsights";

function QueueCard({ queue, onEdit, onDelete }) {
  const isOpen = queue.status === "Open";

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-200">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
        <div className="flex justify-between items-start">

          <div>
            <h2 className="text-2xl font-bold">
              🏥 {queue.organization}
            </h2>

            <p className="text-blue-100 mt-1">
              Queue ID: {queue.queueId}
            </p>
          </div>

          <span
            className={`px-4 py-2 rounded-full text-sm font-bold ${
              isOpen
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          >
            {queue.status}
          </span>

        </div>
      </div>

      {/* Hospital Information */}
      <div className="p-6">

        <div className="grid grid-cols-2 gap-5">

          <div className="bg-blue-50 rounded-xl p-4">
            <p className="text-gray-500 text-sm">
              👥 Current Queue
            </p>

            <h3 className="text-3xl font-bold text-blue-700 mt-2">
              {queue.currentQueue}
            </h3>
          </div>

          <div className="bg-orange-50 rounded-xl p-4">
            <p className="text-gray-500 text-sm">
              ⏱ Wait Time
            </p>

            <h3 className="text-2xl font-bold text-orange-600 mt-2">
              {queue.estimatedWait}
            </h3>
          </div>

          <div className="bg-green-50 rounded-xl p-4">
            <p className="text-gray-500 text-sm">
              👨‍⚕️ Doctors
            </p>

            <h3 className="text-3xl font-bold text-green-600 mt-2">
              {queue.doctorsAvailable ?? "-"}
            </h3>
          </div>

          <div className="bg-purple-50 rounded-xl p-4">
            <p className="text-gray-500 text-sm">
              🏥 Capacity
            </p>

            <h3 className="text-3xl font-bold text-purple-600 mt-2">
              {queue.hospitalCapacity ?? "-"}
            </h3>
          </div>

          <div className="bg-red-50 rounded-xl p-4">
            <p className="text-gray-500 text-sm">
              🚑 Emergency Cases
            </p>

            <h3 className="text-3xl font-bold text-red-600 mt-2">
              {queue.emergencyCases ?? "-"}
            </h3>
          </div>

          <div className="bg-cyan-50 rounded-xl p-4">
            <p className="text-gray-500 text-sm">
              ⏳ Avg Service Time
            </p>

            <h3 className="text-2xl font-bold text-cyan-700 mt-2">
              {queue.averageServiceTime
                ? `${queue.averageServiceTime} min`
                : "-"}
            </h3>
          </div>

        </div>

        {/* AI Section */}
        <AIInsights queue={queue} />

      </div>

      {/* Footer */}
      <div className="bg-gray-100 p-5 flex gap-4">

        <button
          onClick={() => onEdit(queue)}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          ✏️ Update
        </button>

        <button
          onClick={() => onDelete(queue)}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
        >
          🗑 Delete
        </button>

      </div>

    </div>
  );
}

export default QueueCard;