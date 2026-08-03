function QueueCard({ queue, onEdit, onDelete }) {
  const isOpen = queue.status === "Open";

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5">

        <div className="flex justify-between items-center">

          <h2 className="text-2xl font-bold">
            🏥 {queue.organization}
          </h2>

          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              isOpen
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          >
            {queue.status}
          </span>

        </div>

        <p className="mt-2 text-blue-100">
          Queue ID: {queue.queueId}
        </p>

      </div>

      {/* Body */}

      <div className="p-6 space-y-5">

        <div className="flex justify-between items-center">

          <div>
            <p className="text-gray-500 text-sm">
              👥 Current Queue
            </p>

            <h3 className="text-3xl font-bold text-blue-700">
              {queue.currentQueue}
            </h3>
          </div>

          <div className="text-5xl">
            👥
          </div>

        </div>

        <hr />

        <div className="flex justify-between items-center">

          <div>
            <p className="text-gray-500 text-sm">
              ⏱ Estimated Wait
            </p>

            <h3 className="text-2xl font-bold text-orange-500">
              {queue.estimatedWait}
            </h3>
          </div>

          <div className="text-5xl">
            ⏰
          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="bg-gray-50 px-6 py-5 flex gap-4">

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