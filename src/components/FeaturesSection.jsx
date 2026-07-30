const features = [
  {
    title: "Live Queue Tracking",
    description: "Monitor customer flow in real time with instant queue visibility and smart alerts.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path d="M4 5h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 5v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M9 19h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "AI Wait Prediction",
    description: "Predict customer wait times with confidence using historical and live data.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path d="M5 19V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 19V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M19 19v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Smart Appointment Suggestions",
    description: "Recommend the best slots for customers based on demand and branch capacity.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4 9h16" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Nearby Branch Finder",
    description: "Guide customers to the nearest branch with lower wait times and faster service.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
        <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="11" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
          Features
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Everything you need to run smarter queues
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="group rounded-3xl border border-slate-200/80 bg-white/70 p-6 shadow-lg shadow-slate-100/70 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600">
              {feature.icon}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-900">{feature.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
            <div className="mt-5 text-sm font-semibold text-sky-600">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;