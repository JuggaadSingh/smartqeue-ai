const stats = [
  { value: "500+", label: "Active Organizations" },
  { value: "24k+", label: "Users Today" },
  { value: "32%", label: "Average Wait Reduced" },
  { value: "1.2M+", label: "AI Predictions" },
];

function StatsSection() {
  return (
    <section id="dashboard" className="bg-slate-950 px-6 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Performance
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Measurable improvements for modern service teams
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-lg shadow-slate-900/20 backdrop-blur"
            >
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;