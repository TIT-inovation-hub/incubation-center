import AnimatedDots from "./AnimatedDots";

export default function Hero() {
  return (
    <section className="relative overflow-hidden md:pt-20 md:pb-20 px-4 py-[100px] sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF8F2] to-white dark:from-[#050505] dark:to-[#0B0B0B] transition-colors duration-500">
      {/* === BACKGROUND GRAPHICS === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 🔸 Glowing 3D Blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-[#EF6C00]/70 to-[#FFB300]/30 rounded-full blur-[150px] opacity-80 animate-blob"></div>
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400/60 to-blue-600/30 rounded-full blur-[180px] opacity-70 animate-blob delay-700"></div>

        {/* 🔹 3D Light Rings */}
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] border border-cyan-400/20 rounded-full blur-sm animate-spin-slower transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] border border-orange-400/15 rounded-full blur-sm animate-spin-slow transform -translate-x-1/2 -translate-y-1/2"></div>

        {/* 🔸 Circuit Mesh Background */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.08]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="mesh"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 60 H120 M60 0 V120"
                stroke="url(#meshGrad)"
                strokeWidth="0.6"
                strokeLinecap="round"
              />
            </pattern>
            <linearGradient id="meshGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#EF6C00" />
              <stop offset="100%" stopColor="#00BCD4" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh)" />
        </svg>

        {/* 🔹 Floating Particles (safe for hydration) */}
        <AnimatedDots />

        {/* 🔸 Light Trails */}
        <div className="absolute top-1/4 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-400/50 to-transparent blur-sm animate-light-trail"></div>
        <div className="absolute bottom-1/3 right-0 w-full h-[2px] bg-gradient-to-l from-transparent via-cyan-400/40 to-transparent blur-sm animate-light-trail delay-500"></div>
      </div>

      {/* === HERO CONTENT === */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="inline-block mb-10 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full backdrop-blur-sm">
          <span className="text-lg sm:text-sm font-semibold text-accent">
            Welcome to Innovation Hub
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900 dark:text-white">
          TIT Excellence
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EF6C00] via-[#FF9800] to-[#00BCD4] animate-gradient">
            Incubation Cell
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Nurturing entrepreneurial minds and transforming ideas into impactful
          ventures. Empowering students to innovate, collaborate, and lead the
          future.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-[#EF6C00] text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:shadow-orange-400/40 transition-transform duration-300">
            Explore Events
          </button>
          <button className="px-8 py-3 border border-[#EF6C00] text-[#EF6C00] font-semibold rounded-lg hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* === ANIMATIONS === */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: 0.9;
          }
          50% {
            transform: translateY(-10px);
            opacity: 1;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.9;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes blob {
          0%,
          100% {
            transform: scale(1) translate(0, 0);
          }
          50% {
            transform: scale(1.1) translate(20px, -15px);
          }
        }
        .animate-blob {
          animation: blob 15s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 45s linear infinite;
        }
        .animate-spin-slower {
          animation: spin 70s linear infinite reverse;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes lightTrail {
          0% {
            transform: translateX(-100%);
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0.4;
          }
        }
        .animate-light-trail {
          animation: lightTrail 8s linear infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 6s ease infinite;
        }
      `}</style>
    </section>
  );
}
