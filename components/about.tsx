export default function About() {
  const stats = [
    { number: "500+", label: "Students Engaged" },
    { number: "50+", label: "Startups Mentored" },
    { number: "100+", label: "Events Organized" },
    { number: "25+", label: "Industry Partners" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About Our Cell
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The TIT Excellence Incubation Cell is dedicated to fostering
            innovation and entrepreneurship among students, providing
            mentorship, resources, and opportunities to transform ideas into
            reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To create an ecosystem where student entrepreneurs can develop
              their ideas, gain practical experience, and build sustainable
              ventures with guidance from industry experts and mentors.
            </p>
            <ul className="space-y-3">
              {[
                "Mentorship & Guidance",
                "Funding Opportunities",
                "Networking Events",
                "Skill Development",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To establish TIT as a leading innovation hub that produces
              successful entrepreneurs and contributes to economic growth
              through groundbreaking startups and technological innovations.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-muted p-4 rounded-lg text-center"
                >
                  <div className="text-2xl font-bold text-accent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
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
