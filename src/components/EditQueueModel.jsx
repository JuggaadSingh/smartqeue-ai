import { useEffect, useState } from "react";

function EditQueueModel({ queue, onClose, onSave }) {
  const [formData, setFormData] = useState(queue);

  useEffect(() => {
    setFormData(queue);
  }, [queue]);

  if (!formData) return null;

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
          ✏️ Edit Hospital
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            name="queueId"
            value={formData.queueId}
            disabled
            className="border rounded-lg p-3 bg-gray-100"
          />

          <input
            type="number"
            name="currentQueue"
            value={formData.currentQueue}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            name="estimatedWait"
            value={formData.estimatedWait}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            name="doctorsAvailable"
            value={formData.doctorsAvailable || ""}
            onChange={handleChange}
            placeholder="Doctors Available"
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            name="hospitalCapacity"
            value={formData.hospitalCapacity || ""}
            onChange={handleChange}
            placeholder="Hospital Capacity"
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            name="emergencyCases"
            value={formData.emergencyCases || ""}
            onChange={handleChange}
            placeholder="Emergency Cases"
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            name="averageServiceTime"
            value={formData.averageServiceTime || ""}
            onChange={handleChange}
            placeholder="Average Service Time"
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
            Save Changes
          </button>

        </div>

      </div>

    </div>
  );
}

export default EditQueueModel;