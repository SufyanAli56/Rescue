import Hero from "@/app/components/ui/Hero";

export default function Home() {
  return (
    <div className="bg-slate-900">
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful Emergency Features
            </h2>
            <p className="text-xl text-gray-400">Everything you need in critical moments</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🚨",
                title: "Instant Alerts",
                description: "One-tap emergency broadcast to all nearby volunteers with real-time notifications",
                color: "from-red-500 to-orange-500"
              },
              {
                icon: "📍",
                title: "Live GPS Tracking",
                description: "Share your exact location automatically so help can find you instantly",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "⚡",
                title: "Real-Time Updates",
                description: "WebSocket-powered instant communication between users and volunteers",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: "🗺️",
                title: "Interactive Map",
                description: "View all active emergencies on a live map with volunteer locations",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: "🤝",
                title: "Volunteer Network",
                description: "Join a community of heroes ready to help in emergency situations",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "🔒",
                title: "Secure & Private",
                description: "End-to-end encryption with secure authentication and data protection",
                color: "from-indigo-500 to-blue-500"
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
                
                <div className="relative">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-400">Simple, fast, life-saving</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Press Alert",
                description: "Tap the emergency button and your location is captured instantly",
                icon: "🆘"
              },
              {
                step: "02",
                title: "Volunteers Notified",
                description: "Nearby volunteers receive real-time alerts with your location",
                icon: "📢"
              },
              {
                step: "03",
                title: "Help Arrives",
                description: "Volunteers navigate to you and provide immediate assistance",
                icon: "🚑"
              }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30 backdrop-blur-sm">
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <div className="text-red-400 font-bold text-sm mb-2">STEP {item.step}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
                
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <svg className="w-12 h-12 text-red-500/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-red-600 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-red-100 mb-10">
            Join thousands of volunteers saving lives every day
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="px-10 py-4 bg-white text-red-600 font-bold rounded-xl shadow-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Become a Volunteer
            </a>
            <a
              href="/how-it-works"
              className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
