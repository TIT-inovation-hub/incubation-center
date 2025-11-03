export default function Coordinators() {
  const coordinators = [
    {
      name: "PRAKHAR SHRIVASTAV",
      role: "Lead Coordinator",
      department: "CSE",
      image: "/student-coordinator-leader.jpg",
    },
    {
      name: "AMAN MISHRA",
      role: "Mentorship Coordinator",
      department: "CSE",
      image: "/student-coordinator-events.jpg",
    },
    {
      name: "KUSHAGRA DWIVEDI",
      role: "Events Coordinator",
      department: "CYBER SECURITY",
      image: "/student-coordinator-mentorship.jpg",
    },
  ];

  return (
    <section
      id="coordinators"
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0C0C0C] transition-colors duration-500"
    >
      {/* === CONTENT === */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 dark:text-white tracking-tight">
            Student Coordinators
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Meet the dedicated coordinators leading innovation and collaboration
            in our department.
          </p>
        </div>

        {/* === COORDINATOR GRID === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {coordinators.map((coordinator) => (
            <div
              key={coordinator.name}
              className="group relative rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111111] shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden rounded-t-xl">
                <img
                  src={coordinator.image || "/placeholder.svg"}
                  alt={coordinator.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-1">
                  {coordinator.name}
                </h3>
                <p className="text-sm font-medium text-blue-700 dark:text-blue-400 mb-3 tracking-wide uppercase">
                  {coordinator.role}
                </p>
                <span className="inline-block text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-full">
                  {coordinator.department}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === SUBTLE BACKGROUND GRADIENT === */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white dark:from-[#0D0D0D] dark:to-[#090909]" />
    </section>
  );
}
