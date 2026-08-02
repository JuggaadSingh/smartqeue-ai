import { useState, useEffect } from "react";

function EditQueueModal({ queue, onClose, onSave }) {
  const [formData, setFormData] = useState(queue);

  useEffect(() => {
    setFormData(queue);
  }, [queue]);

  if (!queue) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl shadow-2xl p-8 w-[420px]">

        <h2 className="text-3xl font-bold mb-6 text-blue-700">
          Update Queue
        </h2>

        <label className="font-semibold">
          Hospital
        </label>

        <input
          className="border w-full p-2 rounded mt-1 mb-4"
          value={formData.organization}
          onChange={(e) =>
            setFormData({
              ...formData,
              organization: e.target.value,
            })
          }
        />

        <label className="font-semibold">
          Queue Length
        </label>

        <input
          type="number"
          className="border w-full p-2 rounded mt-1 mb-4"
          value={formData.currentQueue}
          onChange={(e) =>
            setFormData({
              ...formData,
              currentQueue: Number(e.target.value),
            })
          }
        />

        <label className="font-semibold">
          Estimated Wait
        </label>

        <input
          className="border w-full p-2 rounded mt-1 mb-4"
          value={formData.estimatedWait}
          onChange={(e) =>
            setFormData({
              ...formData,
              estimatedWait: e.target.value,
            })
          }
        />

        <label className="font-semibold">
          Status
        </label>

        <select
          className="border w-full p-2 rounded mt-1"
          value={formData.status}
          onChange={(e) =>
            setFormData({
              ...formData,
              status: e.target.value,
            })
          }
        >
          <option>Open</option>
          <option>Closed</option>
        </select>

        <div className="flex justify-end gap-3 mt-8">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={() => onSave(formData)}
            className="px-5 py-2 rounded bg-blue-600 text-white"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}

export default EditQueueModal;