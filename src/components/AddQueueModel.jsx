import { useState } from "react";

function AddQueueModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    queueId: "",
    organization: "",
    currentQueue: "",
    estimatedWait: "",
    status: "Open",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl shadow-2xl w-[420px] p-8">

        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          Add Hospital
        </h2>

        <input
          className="border p-3 rounded w-full mb-4"
          placeholder="Queue ID (H003)"
          name="queueId"
          value={formData.queueId}
          onChange={handleChange}
        />

        <input
          className="border p-3 rounded w-full mb-4"
          placeholder="Hospital Name"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
        />

        <input
          type="number"
          className="border p-3 rounded w-full mb-4"
          placeholder="Current Queue"
          name="currentQueue"
          value={formData.currentQueue}
          onChange={handleChange}
        />

        <input
          className="border p-3 rounded w-full mb-4"
          placeholder="Estimated Wait (20 minutes)"
          name="estimatedWait"
          value={formData.estimatedWait}
          onChange={handleChange}
        />

        <select
          className="border p-3 rounded w-full mb-6"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option>Open</option>
          <option>Closed</option>
        </select>

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>

          <button
            onClick={() => onSave(formData)}
            className="px-5 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}

export default AddQueueModal;