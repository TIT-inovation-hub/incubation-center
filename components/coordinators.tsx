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
      department: "CYBER-SECURITY",
      image: "/student-coordinator-mentorship.jpg",
    },
  ];

  return (
    <section id="coordinators" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our Coordinators
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated student leaders driving innovation and excellence across
            all initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coordinators.map((coordinator) => (
            <div
              key={coordinator.name}
              className="group bg-linear-to-br from-primary/5 to-accent/5 border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden bg-muted">
                <img
                  src={coordinator.image || "/placeholder.svg"}
                  alt={coordinator.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1">{coordinator.name}</h3>
                <p className="text-sm text-accent font-semibold mb-2">
                  {coordinator.role}
                </p>
                <p className="text-xs text-muted-foreground bg-muted/50 w-fit px-2 py-1 rounded">
                  {coordinator.department}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
