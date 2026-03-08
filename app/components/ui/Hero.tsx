// components/Hero.tsx
export default function Hero() {
    return (
      <section className="relative pt-20 pb-32 md:pt-28 lg:pt-32 overflow-hidden bg-gradient-to-b from-red-50 via-white to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
              Get Help <span className="text-red-600">Instantly</span> —  
              Even When Seconds Matter
            </h1>
  
            <p className="mt-6 text-lg leading-8 text-gray-700 md:text-xl lg:text-2xl">
              RapidRescue connects people in danger with nearby volunteers in real time.  
              One tap sends your live location and emergency alert — help arrives faster.
            </p>
  
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/signup"
                className="w-full sm:w-auto rounded-full bg-red-600 px-10 py-5 text-lg font-bold text-white shadow-lg hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition transform hover:scale-105"
              >
                Become a Volunteer → Save Lives
              </a>
  
              <a
                href="/alert"
                className="w-full sm:w-auto rounded-full bg-white px-10 py-5 text-lg font-bold text-red-600 shadow-lg ring-1 ring-red-200 hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition transform hover:scale-105"
              >
                I Need Help Now
              </a>
            </div>
  
            <p className="mt-8 text-base text-gray-600">
              Free • No credit card needed • Powered by community volunteers
            </p>
  
            {/* Optional small trust signals / stats - add later when you have real numbers */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div>
                <span className="font-semibold text-gray-700">Live Location</span> sharing
              </div>
              <div>
                <span className="font-semibold text-gray-700">Real-time</span> alerts
              </div>
              <div>
                <span className="font-semibold text-gray-700">Nearby</span> volunteers
              </div>
            </div>
          </div>
        </div>
  
        {/* Optional subtle background accent / illustration layer */}
        <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(239,68,68,0.15),transparent_50%)]"></div>
        </div>
      </section>
    );
  }