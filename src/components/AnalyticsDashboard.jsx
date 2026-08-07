import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

function AnalyticsDashboard({ queues }) {
  // ===========================
  // DATA
  // ===========================

  const queueData = queues.map((q) => ({
    hospital: q.organization,
    queue: Number(q.currentQueue),
  }));

  const waitData = queues.map((q) => ({
    hospital: q.organization,
    wait: parseInt(q.estimatedWait) || 0,
  }));

  return (
    <div className="mt-12 space-y-10">

      {/* Queue Chart */}

      <div className="bg-white rounded-3xl shadow-xl p-6">

        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          📊 Current Queue by Hospital
        </h2>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={queueData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="hospital" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="queue"
              name="Patients"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>

      </div>

      {/* Wait Time Chart */}

      <div className="bg-white rounded-3xl shadow-xl p-6">

        <h2 className="text-2xl font-bold text-orange-600 mb-6">
          ⏱ Average Wait Time Comparison
        </h2>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={waitData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="hospital" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="wait"
              name="Minutes"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default AnalyticsDashboard;