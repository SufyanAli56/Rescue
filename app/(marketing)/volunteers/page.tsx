export default function Volunteers() {
    const volunteers = [
      {
        name: "Ali Khan",
        role: "Medical Volunteer",
        city: "Gulberg, Lahore",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        name: "Ayesha Malik",
        role: "Paramedic Volunteer",
        city: "DHA, Lahore",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        name: "Ahmed Raza",
        role: "Firefighter Volunteer",
        city: "Johar Town, Lahore",
        img: "https://randomuser.me/api/portraits/men/56.jpg",
      },
      {
        name: "Sara Iqbal",
        role: "Community Helper",
        city: "Model Town, Lahore",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      {
        name: "Hassan Javed",
        role: "Volunteer Coordinator",
        city: "Lahore Cantonment, Lahore",
        img: "https://randomuser.me/api/portraits/men/72.jpg",
      },
      {
        name: "Fatima Nawaz",
        role: "Medical Volunteer",
        city: "Shadman, Lahore",
        img: "https://randomuser.me/api/portraits/women/81.jpg",
      },
    ];
  
    return (
      <section className="relative py-28 bg-gradient-to-b from-white via-red-50 to-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
  
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Our <span className="text-red-600">Volunteers</span>
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Meet the dedicated volunteers across Lahore who make RapidRescue possible.  
              Join them to help save lives in emergencies.
            </p>
          </div>
  
          {/* Volunteers Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-10">
            {volunteers.map((volunteer, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition hover:-translate-y-2 text-center"
              >
                {/* Image */}
                <div className="w-24 h-24 mx-auto mb-4">
                  <img
                    src={volunteer.img}
                    alt={volunteer.name}
                    className="w-full h-full object-cover rounded-full border-2 border-red-600"
                  />
                </div>
  
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {volunteer.name}
                </h3>
                <p className="text-red-600 font-medium">{volunteer.role}</p>
                <p className="text-gray-600">{volunteer.city}</p>
                <div className="mt-4 h-1 w-0 bg-red-500 group-hover:w-12 transition-all duration-300 mx-auto"></div>
              </div>
            ))}
          </div>
  
          {/* CTA */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold mb-6">
              Become a <span className="text-red-600">Volunteer</span>
            </h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Join our network and help people in emergencies instantly. Your contribution saves lives.
            </p>
            <a
              href="/signup"
              className="rounded-full bg-red-600 px-12 py-4 text-lg font-bold text-white shadow-lg hover:bg-red-700 transition transform hover:scale-105"
            >
              Join Now
            </a>
          </div>
  
        </div>
  
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(239,68,68,0.15),transparent_50%)]"></div>
        </div>
      </section>
    );
  }