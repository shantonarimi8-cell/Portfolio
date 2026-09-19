function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#8b4a32] font-semibold mb-3">
            My Recent Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#3b1f14] mb-5">
            My Projects
          </h2>

          <div className="w-20 h-1 bg-[#8b4a32] mx-auto rounded-full"></div>

          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Here are some projects I have built while learning
            and improving my development skills.
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Portfolio Project */}
          <div className="group bg-[#fff8f3] rounded-3xl overflow-hidden border border-[#ead8cc] shadow-md hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">

            <div className="h-56 bg-[#f1d7c9] flex items-center justify-center relative overflow-hidden">

              <div className="absolute w-40 h-40 bg-white/30 rounded-full -top-16 -right-10 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="text-center relative z-10">
                <div className="text-6xl mb-3 group-hover:scale-125 transition-transform duration-500">
                  💻
                </div>

                <p className="text-[#5a2d1c] font-bold text-xl">
                  Personal Portfolio
                </p>
              </div>

            </div>

            <div className="p-8">

              <span className="inline-block px-3 py-1 rounded-full bg-[#f5e6dc] text-[#8b4a32] text-sm font-semibold mb-4">
                React.js
              </span>

              <h3 className="text-2xl font-bold text-[#5a2d1c] mb-3">
                Portfolio Website
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                A modern personal portfolio website built with
                React.js and Tailwind CSS to showcase my skills,
                projects and experience.
              </p>

              <a
                href="#home"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-[#5a2d1c] text-white font-semibold hover:bg-[#3b1f14] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                Explore Portfolio →
              </a>

            </div>
          </div>

          {/* Cake Project */}
          <div className="group bg-[#fff8f3] rounded-3xl overflow-hidden border border-[#ead8cc] shadow-md hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">

            <div className="h-56 overflow-hidden relative">

              <img
                src="/cake-ordering.jpg"
                alt="Cake Ordering System"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>

            </div>

            <div className="p-8">

              <span className="inline-block px-3 py-1 rounded-full bg-[#f5e6dc] text-[#8b4a32] text-sm font-semibold mb-4">
                Java Project
              </span>

              <h3 className="text-2xl font-bold text-[#5a2d1c] mb-3">
                Cake Ordering System
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                A Java-based cake ordering system developed as
                a software project for managing cake orders and
                customer information.
              </p>

              <a
                href="https://github.com/shantonarimi8-cell/Cake-Ordering-System"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-[#5a2d1c] text-white font-semibold hover:bg-[#3b1f14] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                View on GitHub →
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Projects