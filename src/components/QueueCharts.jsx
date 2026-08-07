import { useEffect, useState } from "react";
import api from "../services/api";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

function QueueCharts() {
  const [queues, setQueues] = useState([]);

  useEffect(() => {
    loadQueues();
  }, []);

  const loadQueues = async () => {
    try {
      const res = await api.get("/queues");
      setQueues(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const pieData = [
    {
      name: "Open",
      value: queues.filter((q) => q.status === "Open").length,
    },
    {
      name: "Closed",
      value: queues.filter((q) => q.status === "Closed").length,
    },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Queue Analytics
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Bar Chart */}

          <div className="bg-gray-50 rounded-2xl shadow-lg p-6">

            <h3 className="text-2xl font-bold mb-6">
              Patients Waiting
            </h3>

            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={queues}>
                <XAxis dataKey="organization" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="currentQueue"
                  fill="#2563eb"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>

          </div>

          {/* Pie Chart */}

          <div className="bg-gray-50 rounded-2xl shadow-lg p-6">

            <h3 className="text-2xl font-bold mb-6">
              Hospital Status
            </h3>

            <ResponsiveContainer width="100%" height={320}>
              <PieChart>

                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />

              </PieChart>
            </ResponsiveContainer>

          </div>

        </div>

      </div>
    </section>
  );
}

export default QueueCharts;