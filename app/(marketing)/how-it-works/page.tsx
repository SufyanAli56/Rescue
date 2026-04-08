export default function HowItWorks() {
    const steps = [
      {
        icon: "🚨",
        title: "Send Emergency Alert",
        description:
          "Press the panic button to instantly send an alert with your live GPS location.",
      },
      {
        icon: "📡",
        title: "Volunteers Get Notified",
        description:
          "Nearby volunteers receive the alert in real time through the RapidRescue network.",
      },
      {
        icon: "🤝",
        title: "Help Arrives Quickly",
        description:
          "Volunteers navigate to your location and provide immediate assistance.",
      },
    ];
  
    return (
      <section className="relative py-28 bg-gradient-to-b from-white via-red-50 to-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
  
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              How <span className="text-red-600">RapidRescue</span> Works
            </h2>
  
            <p className="mt-6 text-lg text-gray-700">
              A simple three-step process that connects people in emergencies
              with nearby volunteers instantly.
            </p>
          </div>
  
          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-12 relative">
  
            {steps.map((step, i) => (
              <div
                key={i}
                className="group text-center bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-xl transition hover:-translate-y-2"
              >
                <div className="text-5xl mb-6">{step.icon}</div>
  
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
  
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
  
                <div className="mt-5 h-1 w-0 bg-red-500 group-hover:w-14 transition-all duration-300 mx-auto"></div>
              </div>
            ))}
  
          </div>
  
          {/* CTA */}
          <div className="mt-20 flex justify-center gap-6 flex-wrap">
  
            <a
              href="/signup"
              className="rounded-full bg-red-600 px-10 py-4 text-lg font-bold text-white shadow-lg hover:bg-red-700 transition transform hover:scale-105"
            >
              Become a Volunteer
            </a>
  
            <a
              href="/alert"
              className="rounded-full bg-white px-10 py-4 text-lg font-bold text-red-600 shadow-lg ring-1 ring-red-200 hover:bg-red-50 transition transform hover:scale-105"
            >
              I Need Help Now
            </a>
  
          </div>
  
        </div>
  
        {/* Background glow */}
        <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(239,68,68,0.15),transparent_50%)]"></div>
        </div>
      </section>
    );
  }