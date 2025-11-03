export default function About() {
  const stats = [
    { number: "500+", label: "Students Engaged" },
    { number: "50+", label: "Startups Mentored" },
    { number: "100+", label: "Events Organized" },
    { number: "25+", label: "Industry Partners" },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF9] to-white dark:from-[#0E0E0E] dark:to-[#080808] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          About Our Cell
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-14 leading-relaxed">
          The TIT Excellence Incubation Cell nurtures innovation and
          entrepreneurship among students — providing mentorship, resources, and
          opportunities to turn ideas into impactful ventures.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Mission */}
          <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-white/5 backdrop-blur-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
              Empower students to innovate, gain practical experience, and
              launch sustainable startups with strong industry mentorship.
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              {[
                "Mentorship & Guidance",
                "Funding Opportunities",
                "Networking Events",
                "Skill Development",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#EF6C00] rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Vision */}
          <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-white/5 backdrop-blur-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              To establish TIT as a leading innovation hub producing visionary
              entrepreneurs through technology, creativity, and collaboration.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-lg border border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-white/5 text-center backdrop-blur-sm hover:shadow-sm transition"
                >
                  <div className="text-2xl font-bold text-[#EF6C00]">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
