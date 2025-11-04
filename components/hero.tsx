export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
          <span className="text-sm font-semibold text-accent">
            Welcome to Innovation Hub
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          TIT Excellence
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
            Incubation Cell
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
          Nurturing entrepreneurial minds and transforming ideas into impactful
          ventures. Empowering students to innovate, collaborate, and lead the
          future.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors">
            Explore Events
          </button>
          <button className="px-8 py-3 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
