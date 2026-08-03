import { useEffect, useState } from "react";
import api from "../services/api";

function StatsSection() {
  const [stats, setStats] = useState({
    hospitals: 0,
    open: 0,
    closed: 0,
    waiting: 0,
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

      const open = queues.filter(
        (q) => q.status === "Open"
      ).length;

      const closed = queues.filter(
        (q) => q.status === "Closed"
      ).length;

      const waiting = queues.reduce(
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
        open,
        closed,
        waiting,
        avgWait,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const cardStyle =
    "bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition hover:-translate-y-1";

  return (
    <section className="py-16 bg-gray-100">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Dashboard Analytics
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          <div className={cardStyle}>
            <div className="text-5xl mb-3">🏥</div>
            <h3 className="text-4xl font-bold">
              {stats.hospitals}
            </h3>
            <p className="text-gray-500 mt-2">
              Hospitals
            </p>
          </div>

          <div className={cardStyle}>
            <div className="text-5xl mb-3">🟢</div>
            <h3 className="text-4xl font-bold text-green-600">
              {stats.open}
            </h3>
            <p className="text-gray-500 mt-2">
              Open
            </p>
          </div>

          <div className={cardStyle}>
            <div className="text-5xl mb-3">🔴</div>
            <h3 className="text-4xl font-bold text-red-500">
              {stats.closed}
            </h3>
            <p className="text-gray-500 mt-2">
              Closed
            </p>
          </div>

          <div className={cardStyle}>
            <div className="text-5xl mb-3">👥</div>
            <h3 className="text-4xl font-bold text-indigo-600">
              {stats.waiting}
            </h3>
            <p className="text-gray-500 mt-2">
              Patients Waiting
            </p>
          </div>

          <div className={cardStyle}>
            <div className="text-5xl mb-3">⏱</div>
            <h3 className="text-4xl font-bold text-orange-500">
              {stats.avgWait}
            </h3>
            <p className="text-gray-500 mt-2">
              Avg Wait (min)
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default StatsSection;