function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#fff8f3] text-[#3b1f14]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#8b4a32] font-semibold mb-3">
            Let's Connect
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Contact Me
          </h2>

          <div className="w-20 h-1 bg-[#8b4a32] mx-auto rounded-full"></div>

          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Have a project idea or want to say hello?
            Feel free to get in touch with me.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* Left Side */}
          <div className="bg-white backdrop-blur-sm rounded-3xl p-8 border border-[#ead8cc] shadow-md">

            <h3 className="text-2xl font-bold mb-6 text-[#5a2d1c]">
              Let's work together 🤝
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8">
              I am always interested in learning, building
              new projects and connecting with people.
              Send me a message and I'll get back to you.
            </p>

            <div className="space-y-5">

              <a
                href="mailto:shantonarimi8@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f1d7c9] flex items-center justify-center text-xl group-hover:bg-[#8b4a32] group-hover:text-white transition-all duration-300">
                  ✉️
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <p className="font-medium text-[#3b1f14]">
                    shantonarimi8@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/shantonarimi8-cell"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f1d7c9] flex items-center justify-center text-xl group-hover:bg-[#8b4a32] group-hover:text-white transition-all duration-300">
                  🐙
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    GitHub
                  </p>

                  <p className="font-medium text-[#3b1f14]">
                    github.com/shantonarimi8-cell
                  </p>
                </div>
              </a>

            </div>

          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-3xl p-8 shadow-md text-[#3b1f14] border border-[#ead8cc]">

            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert("Thank you! Your message has been received.")
              }}
              className="space-y-5"
            >

              <div>
                <label className="block font-semibold mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#fff8f3] text-[#3b1f14] border border-[#ead8cc] outline-none placeholder:text-gray-500 focus:border-[#8b4a32] focus:ring-2 focus:ring-[#8b4a32]/20 transition-all"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#fff8f3] text-[#3b1f14] border border-[#ead8cc] outline-none placeholder:text-gray-500 focus:border-[#8b4a32] focus:ring-2 focus:ring-[#8b4a32]/20 transition-all"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#fff8f3] text-[#3b1f14] border border-[#ead8cc] outline-none resize-none placeholder:text-gray-500 focus:border-[#8b4a32] focus:ring-2 focus:ring-[#8b4a32]/20 transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#5a2d1c] text-white font-semibold hover:bg-[#8b4a32] hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                Send Message →
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact