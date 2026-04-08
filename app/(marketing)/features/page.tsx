import React from "react";

const page = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-red-50 via-white to-white overflow-hidden">

      {/* HERO */}
      <section className="pt-28 pb-24 text-center max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
          Powerful <span className="text-red-600">Emergency</span> Features
        </h1>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          RapidRescue connects people in emergencies with nearby volunteers
          using real-time alerts, live location sharing, and a powerful
          community response network.
        </p>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {[
            {
              icon: "🚨",
              title: "Instant Emergency Alerts",
              text: "Send an emergency alert instantly with one tap. Nearby volunteers receive notifications in real time so help can arrive faster."
            },
            {
              icon: "📍",
              title: "Live Location Sharing",
              text: "RapidRescue captures your GPS location and shares it with responders so they can navigate directly to you."
            },
            {
              icon: "⚡",
              title: "Real-Time Notifications",
              text: "Powered by Supabase realtime technology to deliver instant emergency notifications."
            },
            {
              icon: "🗺",
              title: "Live Emergency Map",
              text: "All alerts appear on a live map allowing volunteers to quickly identify and respond."
            },
            {
              icon: "🤝",
              title: "Community Volunteers",
              text: "A network of volunteers ready to assist people in emergency situations."
            },
            {
              icon: "🔒",
              title: "Secure & Reliable",
              text: "Modern infrastructure with secure authentication and real-time reliability."
            }
          ].map((feature, i) => (
            <div
              key={i}
              className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">{feature.text}</p>

              <div className="mt-4 h-1 w-0 bg-red-500 group-hover:w-12 transition-all duration-300"></div>
            </div>
          ))}

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-14">
            How <span className="text-red-600">RapidRescue</span> Works
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            <div className="p-6">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="font-semibold text-lg mb-2">Send Alert</h3>
              <p className="text-gray-600">
                Press the panic button to instantly send an emergency alert
                with your real-time location.
              </p>
            </div>

            <div className="p-6">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="font-semibold text-lg mb-2">Volunteers Notified</h3>
              <p className="text-gray-600">
                Nearby volunteers receive the alert instantly through the
                realtime notification system.
              </p>
            </div>

            <div className="p-6">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="font-semibold text-lg mb-2">Help Arrives</h3>
              <p className="text-gray-600">
                Volunteers navigate to your location and provide immediate
                assistance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Be Part of the <span className="text-red-600">Emergency Network</span>
        </h2>

        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Join RapidRescue as a volunteer or use the platform to request help
          instantly during emergencies.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

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
      </section>

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(239,68,68,0.15),transparent_50%)]"></div>
      </div>

    </div>
  );
};

export default page;