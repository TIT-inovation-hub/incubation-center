import Image from "next/image";

export default function Mentors() {
  const mentors = [
    {
      name: "MR. AMAR NAYAK",
      title: "Founder & CEO, TechVentures",
      expertise: "Technology & Innovation",
      image: "/amarsir.jpg",
    },
    {
      name: "MRS. RACHANA KAMBLE",
      title: "Business Strategy Consultant",
      expertise: "Business Development",
      image: "/rachanamam.jpg",
    },
    {
      name: "MR. RAM SAHU",
      title: "Investment Advisor",
      expertise: "Management & Finance",
      image: "/ramsir.jpg",
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
              className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-sm text-center"
            >
              {/* Mentor Image */}
              <div className="relative w-40 h-40 sm:w-44 sm:h-44 mx-auto mb-5 rounded-full overflow-hidden border-2 border-[#EF6C00]/30 dark:border-[#FF9800]/30 shadow-md bg-white/90 dark:bg-[#111]">
                <Image
                  src={mentor.image || "/placeholder.svg"}
                  alt={mentor.name}
                  fill
                  className="object-cover object-center scale-110"
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 176px, 192px"
                  priority
                />
              </div>

              {/* Mentor Info */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {mentor.name}
              </h3>
              <p className="text-sm sm:text-base font-medium text-[#EF6C00] dark:text-[#FF9800] mb-1">
                {mentor.title}
              </p>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                {mentor.expertise}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
