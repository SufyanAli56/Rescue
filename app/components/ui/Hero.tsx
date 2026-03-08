// components/Hero.tsx
export default function Hero() {
    return (
      <section className="relative pt-20 pb-32 md:pt-28 lg:pt-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              The simplest way to{" "}
              <span className="text-blue-600">manage your business</span>
            </h1>
  
            <p className="mt-6 text-lg leading-8 text-gray-600 md:text-xl">
              YourSaaS helps teams save hours every week with powerful automation,
              beautiful dashboards, and zero-config setup. Built for modern teams who
              value speed and clarity.
            </p>
  
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href="/signup"
                className="w-full sm:w-auto rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Start Free Trial
              </a>
              <a
                href="#demo"
                className="w-full sm:w-auto rounded-lg border border-gray-300 px-8 py-4 text-base font-semibold text-gray-700 hover:bg-gray-50"
              >
                Watch Demo
              </a>
            </div>
  
            <p className="mt-6 text-sm text-gray-500">
              No credit card required • Free for 14 days
            </p>
          </div>
        </div>
      </section>
    );
  }