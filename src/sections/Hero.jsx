function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 pt-24 bg-[#fff8f3]"
    >
      <div className="max-w-6xl mx-auto w-full">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="animate-[fadeInUp_0.8s_ease-out]">

            <p className="text-[#8b4a32] font-semibold text-lg mb-4">
              Hello, I'm 👋
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-[#3b1f14] leading-tight mb-6">
              Shantona
              <span className="block text-[#8b4a32]">
                Rimi
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-[#5a2d1c] mb-6">
              Frontend Developer
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-8">
              I create clean, modern and responsive websites
              using React.js, Tailwind CSS and modern web
              technologies.
            </p>

            <div className="flex flex-wrap gap-4">

              {/* View Projects Button */}
              <a
                href="#projects"
                className="px-7 py-3 rounded-xl bg-[#5a2d1c] text-white font-semibold shadow-lg hover:bg-[#3b1f14] hover:-translate-y-1 transition-all duration-300"
              >
                View My Projects →
              </a>

              {/* Contact Button */}
              <a
                href="#contact"
                className="px-7 py-3 rounded-xl border-2 border-[#5a2d1c] text-[#5a2d1c] font-semibold hover:bg-[#5a2d1c] hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                Contact Me
              </a>

              {/* Download CV Button */}
              <a
                href="/Shantona-Rimi-CV.pdf"
                download
                className="px-7 py-3 rounded-xl border-2 border-[#8b4a32] text-[#8b4a32] font-semibold hover:bg-[#8b4a32] hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                Download CV ↓
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center animate-[fadeIn_1s_ease-out]">

            <div className="relative">

              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#f1d7c9] flex items-center justify-center shadow-2xl animate-pulse">

                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-[#fff8f3] border-8 border-white shadow-xl flex items-center justify-center text-center">

                  <div>

                    <div className="text-6xl mb-4">
                      💻
                    </div>

                    <p className="text-[#5a2d1c] font-bold text-xl">
                      Code • Create •
                    </p>

                    <p className="text-[#8b4a32] font-bold text-xl">
                      Inspire
                    </p>

                  </div>

                </div>

              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-4 shadow-xl border border-[#ead8cc] hover:-translate-y-1 transition-transform duration-300">

                <p className="text-sm text-gray-500">
                  Currently
                </p>

                <p className="font-bold text-[#5a2d1c]">
                  Learning & Building 🚀
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero