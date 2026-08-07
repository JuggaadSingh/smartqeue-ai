import { useState } from "react";

function AddQueueModel({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    queueId: "",
    organization: "",
    currentQueue: "",
    estimatedWait: "",
    doctorsAvailable: "",
    hospitalCapacity: "",
    emergencyCases: "",
    averageServiceTime: "",
    status: "Open",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "number"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8">

        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          🏥 Add Hospital
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            name="organization"
            placeholder="Hospital Name"
            value={formData.organization}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            name="queueId"
            placeholder="Queue ID (H001)"
            value={formData.queueId}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            name="currentQueue"
            placeholder="Current Queue"
            value={formData.currentQueue}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            name="estimatedWait"
            placeholder="Estimated Wait (20 minutes)"
            value={formData.estimatedWait}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            name="doctorsAvailable"
            placeholder="Doctors Available"
            value={formData.doctorsAvailable}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            name="hospitalCapacity"
            placeholder="Hospital Capacity"
            value={formData.hospitalCapacity}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            name="emergencyCases"
            placeholder="Emergency Cases"
            value={formData.emergencyCases}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            name="averageServiceTime"
            placeholder="Average Service Time (min)"
            value={formData.averageServiceTime}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

        </div>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border rounded-lg p-3 w-full mt-4"
        >
          <option>Open</option>
          <option>Closed</option>
        </select>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="px-6 py-3 rounded-lg bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </button>

          <button
            onClick={() => onSave(formData)}
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
          >
            Save Hospital
          </button>

        </div>

      </div>

    </div>
  );
}

export default AddQueueModel;