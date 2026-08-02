import { useEffect, useState } from "react";
import api from "../services/api";

function StatsSection() {
  const [stats, setStats] = useState({
    hospitals: 0,
    totalQueue: 0,
    avgWait: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const res = await api.get("/queues");
      const queues = res.data.data;

      const hospitals = queues.length;

      const totalQueue = queues.reduce(
        (sum, q) => sum + Number(q.currentQueue),
        0
      );

      const totalWait = queues.reduce(
        (sum, q) => sum + parseInt(q.estimatedWait),
        0
      );

      const avgWait =
        hospitals > 0
          ? Math.round(totalWait / hospitals)
          : 0;

      setStats({
        hospitals,
        totalQueue,
        avgWait,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="py-14 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Dashboard Overview
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <div className="text-5xl mb-4">🏥</div>
            <h3 className="text-4xl font-bold text-blue-700">
              {stats.hospitals}
            </h3>
            <p className="text-gray-500 mt-2">
              Total Hospitals
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <div className="text-5xl mb-4">👥</div>
            <h3 className="text-4xl font-bold text-green-600">
              {stats.totalQueue}
            </h3>
            <p className="text-gray-500 mt-2">
              People Waiting
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <div className="text-5xl mb-4">⏱</div>
            <h3 className="text-4xl font-bold text-orange-500">
              {stats.avgWait} min
            </h3>
            <p className="text-gray-500 mt-2">
              Average Wait Time
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default StatsSection;