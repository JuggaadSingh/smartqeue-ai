import { useState } from "react";

function HospitalComparison({ queues }) {
  const [hospitalA, setHospitalA] = useState("");
  const [hospitalB, setHospitalB] = useState("");

  const first = queues.find(
    (q) => q.queueId === hospitalA
  );

  const second = queues.find(
    (q) => q.queueId === hospitalB
  );

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mt-12">

      <h2 className="text-3xl font-bold text-blue-700 mb-8">
        🏥 Compare Hospitals
      </h2>

      {/* Selectors */}

      <div className="grid md:grid-cols-2 gap-6">

        <select
          value={hospitalA}
          onChange={(e) => setHospitalA(e.target.value)}
          className="border rounded-xl p-4"
        >
          <option value="">Select Hospital A</option>

          {queues.map((q) => (
            <option
              key={q.queueId}
              value={q.queueId}
            >
              {q.organization}
            </option>
          ))}

        </select>

        <select
          value={hospitalB}
          onChange={(e) => setHospitalB(e.target.value)}
          className="border rounded-xl p-4"
        >
          <option value="">Select Hospital B</option>

          {queues.map((q) => (
            <option
              key={q.queueId}
              value={q.queueId}
            >
              {q.organization}
            </option>
          ))}

        </select>

      </div>

      {/* Comparison */}

      {first && second && (

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {/* Hospital A */}

          <div className="bg-blue-50 rounded-2xl p-6">

            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              {first.organization}
            </h3>

            <div className="space-y-3">

              <p>
                👥 Queue:
                <strong> {first.currentQueue}</strong>
              </p>

              <p>
                ⏱ Wait:
                <strong> {first.estimatedWait}</strong>
              </p>

              <p>
                👨‍⚕️ Doctors:
                <strong> {first.doctorsAvailable}</strong>
              </p>

              <p>
                🚑 Emergency:
                <strong> {first.emergencyCases}</strong>
              </p>

              <p>
                🏥 Capacity:
                <strong> {first.hospitalCapacity}</strong>
              </p>

            </div>

          </div>

          {/* Hospital B */}

          <div className="bg-green-50 rounded-2xl p-6">

            <h3 className="text-2xl font-bold text-green-700 mb-4">
              {second.organization}
            </h3>

            <div className="space-y-3">

              <p>
                👥 Queue:
                <strong> {second.currentQueue}</strong>
              </p>

              <p>
                ⏱ Wait:
                <strong> {second.estimatedWait}</strong>
              </p>

              <p>
                👨‍⚕️ Doctors:
                <strong> {second.doctorsAvailable}</strong>
              </p>

              <p>
                🚑 Emergency:
                <strong> {second.emergencyCases}</strong>
              </p>

              <p>
                🏥 Capacity:
                <strong> {second.hospitalCapacity}</strong>
              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default HospitalComparison;