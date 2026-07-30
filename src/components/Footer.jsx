function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-slate-50 px-6 py-16 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
                <path d="M5 7.5L12 3l7 4.5v9L12 21l-7-4.5v-9Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">SmartQueue AI</p>
              <p className="text-xs text-slate-500">Queue Intelligence</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
            Helping modern organizations reduce wait times and create frictionless customer journeys.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-900">Product</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><a href="#features" className="transition hover:text-sky-600">Features</a></li>
              <li><a href="#dashboard" className="transition hover:text-sky-600">Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-900">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><a href="#home" className="transition hover:text-sky-600">About</a></li>
              <li><a href="#contact" className="transition hover:text-sky-600">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-900">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>hello@smartqueue.ai</li>
              <li>+1 (800) 555-0199</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;