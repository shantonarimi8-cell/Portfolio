function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#8b4a32] font-semibold mb-3">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#3b1f14] mb-5">
            About Me
          </h2>

          <div className="w-20 h-1 bg-[#8b4a32] mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div className="bg-[#fff8f3] rounded-3xl p-8 md:p-10 shadow-lg border border-[#ead8cc]">

            <div className="w-16 h-16 rounded-2xl bg-[#5a2d1c] flex items-center justify-center text-3xl mb-6 shadow-md">
              👩‍💻
            </div>

            <h3 className="text-2xl font-bold text-[#5a2d1c] mb-5">
              Who I Am
            </h3>

            <p className="text-gray-600 leading-relaxed mb-5">
              I am a passionate frontend developer who enjoys
              creating clean, modern and responsive websites.
              I love turning ideas into beautiful and interactive
              web experiences.
            </p>

            <p className="text-gray-600 leading-relaxed">
              I am continuously learning new technologies and
              improving my skills by building real-world projects.
            </p>

            <div className="mt-7 pt-6 border-t border-[#ead8cc]">
              <p className="text-[#8b4a32] font-semibold">
                💡 Always learning. Always building.
              </p>
            </div>

          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-5">

            {/* Card 1 */}
            <div className="group bg-[#f5e6dc] rounded-3xl p-7 text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                💻
              </div>

              <h3 className="text-xl font-bold text-[#5a2d1c] mb-2">
                Development
              </h3>

              <p className="text-sm text-gray-600">
                Building modern web applications
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-[#f5e6dc] rounded-3xl p-7 text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                ⚛️
              </div>

              <h3 className="text-xl font-bold text-[#5a2d1c] mb-2">
                React.js
              </h3>

              <p className="text-sm text-gray-600">
                Creating interactive interfaces
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-[#f5e6dc] rounded-3xl p-7 text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🎨
              </div>

              <h3 className="text-xl font-bold text-[#5a2d1c] mb-2">
                UI Design
              </h3>

              <p className="text-sm text-gray-600">
                Clean and user-friendly designs
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-[#f5e6dc] rounded-3xl p-7 text-center shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🚀
              </div>

              <h3 className="text-xl font-bold text-[#5a2d1c] mb-2">
                Growth
              </h3>

              <p className="text-sm text-gray-600">
                Learning new technologies
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About