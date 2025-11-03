export default function Mentors() {
  const mentors = [
    {
      name: "MR.AMAR NAYAK",
      title: "Founder & CEO, TechVentures",
      expertise: "Technology & Innovation",
      image: "/professional-mentor-tech-entrepreneur.jpg",
    },
    {
      name: "MRS.RACHANA KAMBLE",
      title: "Business Strategy Consultant",
      expertise: "Business Development",
      image: "/professional-mentor-business-consultant.jpg",
    },
    {
      name: "MR.RAM SAHU",
      title: "Investment Advisor",
      expertise: "Management",
      image: "/professional-mentor-finance-advisor.jpg",
    },
  ];

  return (
    <section
      id="mentors"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 w-full"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Mentors</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn from industry leaders and experienced entrepreneurs who are
            committed to your success.
          </p>
        </div>

        {/* ✅ Adjusted grid for 3 mentors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor) => (
            <div
              key={mentor.name}
              className="group bg-background border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={mentor.image || "/placeholder.svg"}
                  alt={mentor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1">{mentor.name}</h3>
                <p className="text-sm text-accent font-semibold mb-2">
                  {mentor.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {mentor.expertise}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
