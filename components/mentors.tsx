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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFFDF9] to-white dark:from-[#0E0E0E] dark:to-[#080808] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Our Mentors
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-14 leading-relaxed">
          Guided by experienced and visionary teachers, our mentors provide
          valuable insights and hands-on guidance to help students transform
          their ideas into impactful ventures.
        </p>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-white/5 backdrop-blur-sm text-center"
            >
              {/* Mentor Image */}
              <div className="w-44 h-44 mx-auto mb-5 rounded-full overflow-hidden border-2 border-[#EF6C00]/30 dark:border-[#FF9800]/30 shadow-md bg-white/90 dark:bg-[#111] flex items-center justify-center">
                <img
                  src={mentor.image || "/placeholder.svg"}
                  alt={mentor.name}
                  className="w-full h-full object-cover object-center scale-110"
                />
              </div>

              {/* Mentor Info */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {mentor.name}
              </h3>
              <p className="text-sm font-medium text-[#EF6C00] dark:text-[#FF9800] mb-1">
                {mentor.title}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {mentor.expertise}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
