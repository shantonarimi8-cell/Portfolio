function Skills() {
  const skills = [
    {
      icon: "🌐",
      title: "HTML",
      level: "Advanced",
      progress: "90%",
      text: "Creating clean and semantic web structures.",
    },
    {
      icon: "🎨",
      title: "CSS",
      level: "Advanced",
      progress: "85%",
      text: "Designing responsive and beautiful layouts.",
    },
    {
      icon: "⚛️",
      title: "React.js",
      level: "Intermediate",
      progress: "75%",
      text: "Building interactive and reusable components.",
    },
    {
      icon: "💨",
      title: "Tailwind CSS",
      level: "Intermediate",
      progress: "75%",
      text: "Creating modern and responsive designs quickly.",
    },
    {
      icon: "☕",
      title: "Java",
      level: "Intermediate",
      progress: "70%",
      text: "Developing software and application projects.",
    },
    {
      icon: "🐙",
      title: "GitHub",
      level: "Intermediate",
      progress: "70%",
      text: "Managing, sharing and collaborating on projects.",
    },
  ]

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-[#fff8f3]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#8b4a32] font-semibold mb-3">
            What I Work With
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#3b1f14] mb-5">
            My Skills
          </h2>

          <div className="w-20 h-1 bg-[#8b4a32] mx-auto rounded-full"></div>

          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Technologies and tools I use to build modern,
            responsive and user-friendly websites.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="group bg-white rounded-3xl p-7 border border-[#ead8cc] shadow-md hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#f5e6dc] flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>

              {/* Title + Level */}
              <div className="flex items-center justify-between mb-3">

                <h3 className="text-xl font-bold text-[#5a2d1c]">
                  {skill.title}
                </h3>

                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#f5e6dc] text-[#8b4a32]">
                  {skill.level}
                </span>

              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {skill.text}
              </p>

              {/* Progress */}
              <div className="mt-6">

                <div className="flex justify-between text-xs font-semibold text-gray-500 mb-2">
                  <span>Skill Level</span>
                  <span>{skill.progress}</span>
                </div>

                <div className="h-2 bg-[#ead8cc] rounded-full overflow-hidden">

                  <div
                    className="h-full bg-[#8b4a32] rounded-full transition-all duration-1000 group-hover:bg-[#5a2d1c]"
                    style={{ width: skill.progress }}
                  ></div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills