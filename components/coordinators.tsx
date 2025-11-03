export default function Coordinators() {
  const coordinators = [
    {
      name: "PRAKHAR SHRIVASTAV",
      role: "Lead Coordinator",
      department: "CSE",
      image: "prakhar.jpg",
    },
    {
      name: "AMAN MISHRA",
      role: "Mentorship Coordinator",
      department: "CSE",
      image: "aman.jpg",
    },
    {
      name: "KUSHAGRA DWIVEDI",
      role: "Events Coordinator",
      department: "CYBER SECURITY",
      image: "kushagra.jpg",
    },
  ];

  return (
    <section
      id="coordinators"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF9] to-white dark:from-[#0E0E0E] dark:to-[#080808] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
          Our Coordinators
        </h2>
        <p className="text-base sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 sm:mb-14 leading-relaxed">
          Meet our dedicated coordinators who lead innovation, collaboration,
          and execution — driving the cell’s activities with energy and passion.
        </p>

        {/* Coordinators Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 place-items-center">
          {coordinators.map((coordinator) => (
            <div
              key={coordinator.name}
              className="w-full max-w-sm p-5 sm:p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-white/5 backdrop-blur-sm text-center"
            >
              {/* Coordinator Image */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-5 rounded-full overflow-hidden border-2 border-[#EF6C00]/30 dark:border-[#FF9800]/30 shadow-md">
                <img
                  src={coordinator.image || "/placeholder.svg"}
                  alt={coordinator.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Coordinator Info */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {coordinator.name}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-[#EF6C00] dark:text-[#FF9800] mb-2 uppercase tracking-wide">
                {coordinator.role}
              </p>
              <p className="inline-block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-full">
                {coordinator.department}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
