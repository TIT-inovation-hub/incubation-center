export default function Mentors() {
  const mentors = [
    {
      name: "MR. AMAR NAYAK",
      title: "Founder & CEO, TechVentures",
      expertise: "Technology & Innovation",
      image: "amarsir.jpg",
    },
    {
      name: "MRS. RACHANA KAMBLE",
      title: "Business Strategy Consultant",
      expertise: "Business Development",
      image: "rachanamam.jpg",
    },
    {
      name: "MR. RAM SAHU",
      title: "Investment Advisor",
      expertise: "Management & Finance",
      image: "/professional-mentor-finance-advisor.jpg",
    },
  ];

  return (
    <section
      id="mentors"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 px-4 sm:px-8 lg:px-12 xl:px-20 bg-gradient-to-b from-[#FFF8F2] to-white dark:from-[#0B0B0B] dark:to-[#050505] transition-colors duration-500"
    >
      {/* === BACKGROUND ORBS === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 bg-gradient-to-br from-orange-400/10 to-cyan-400/10 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-60 sm:w-80 md:w-[28rem] h-60 sm:h-80 md:h-[28rem] bg-gradient-to-tr from-cyan-400/10 to-orange-400/10 rounded-full blur-[140px] animate-blob delay-700"></div>
      </div>

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
            Our Mentors
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Guided by experienced entrepreneurs and industry leaders, our
            mentors help shape ideas into impactful ventures.
          </p>
        </div>

        {/* === MENTOR GRID === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 place-items-center">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="group w-full max-w-sm bg-white/70 dark:bg-white/5 backdrop-blur-md border border-gray-200/20 rounded-2xl overflow-hidden transition-all duration-300"
            >
              {/* === IMAGE === */}
              <div className="relative w-full h-80 sm:h-96 overflow-hidden rounded-t-2xl">
                <img
                  src={mentor.image || "/placeholder.svg"}
                  alt={mentor.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300" />
              </div>

              {/* === TEXT === */}
              <div className="p-6 text-center">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {mentor.name}
                </h3>
                <p className="text-sm md:text-base font-medium text-[#EF6C00] dark:text-[#FF9800] mb-1">
                  {mentor.title}
                </p>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {mentor.expertise}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === ANIMATIONS === */}
      <style jsx global>{`
        @keyframes blob {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-blob {
          animation: blob 18s ease-in-out infinite;
        }

        @media (max-width: 380px) {
          #mentors h2 {
            font-size: 1.75rem;
          }
          #mentors p {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}
