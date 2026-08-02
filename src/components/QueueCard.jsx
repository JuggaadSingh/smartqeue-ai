function QueueCard({ queue, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        🏥 {queue.organization}
      </h2>

      <div className="space-y-2 text-gray-700">

        <p>
          <strong>Queue ID:</strong> {queue.queueId}
        </p>

        <p>
          <strong>Current Queue:</strong> {queue.currentQueue}
        </p>

        <p>
          <strong>Estimated Wait:</strong> {queue.estimatedWait}
        </p>

        <p>
          <strong>Status:</strong>{" "}
          <span className="text-green-600 font-semibold">
            {queue.status}
          </span>
        </p>

      </div>

      <div className="flex gap-3 mt-6">

        <button
          onClick={() => onEdit(queue)}
          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg"
        >
          ✏️ Update
        </button>

        <button
          onClick={() => onDelete(queue)}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
        >
          🗑 Delete
        </button>

      </div>

    </div>
  );
}

export default QueueCard;