function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100 px-6 py-20 lg:px-8 lg:py-28"
    >
      <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />
      <div className="absolute bottom-0 right-[-10%] h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm">
            Trusted by modern service teams
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            AI-Powered Queue Prediction
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            SmartQueue AI helps businesses reduce wait times, optimize staffing, and create seamless customer experiences with real-time queue intelligence.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#dashboard"
              className="rounded-full bg-sky-600 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-sky-600/20 transition hover:-translate-y-0.5 hover:bg-sky-700"
            >
              Check Queue
            </a>
            <a
              href="#features"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700"
            >
              View Dashboard
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-sm text-slate-600">
            <div className="rounded-full bg-white/70 px-4 py-2 shadow-sm">⚡ Live forecasting</div>
            <div className="rounded-full bg-white/70 px-4 py-2 shadow-sm">📈 Smart staffing</div>
            <div className="rounded-full bg-white/70 px-4 py-2 shadow-sm">🤖 AI-driven insights</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky-400/20 to-blue-600/20 blur-3xl" />
          <div className="relative rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-2xl shadow-slate-200/70 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-500">Live queue health</p>
                <p className="text-3xl font-semibold text-slate-900">12 mins</p>
              </div>
              <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-700">
                +18% efficiency
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-950/90 p-4 text-white">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Prediction accuracy</span>
                <span className="font-semibold text-white">94.8%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-slate-700">
                <div className="h-2 w-[95%] rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">Peak hour</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">2:30 PM</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">Recommended staff</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">4 agents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;