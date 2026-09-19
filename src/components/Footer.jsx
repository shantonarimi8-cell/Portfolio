function Footer() {
  return (
    <footer className="bg-[#3b1f14] text-white py-8 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h3 className="text-2xl font-bold mb-3">
          Shantona Rimi
        </h3>

        <p className="text-[#e8d4ca] mb-5">
          Frontend Developer | React.js | Tailwind CSS
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/shantonarimi8-cell"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e8d4ca] hover:text-white transition-colors"
          >
            GitHub
          </a>

          <a
            href="mailto:shantonarimi8@gmail.com"
            className="text-[#e8d4ca] hover:text-white transition-colors"
          >
            Email
          </a>

          <a
            href="#contact"
            className="text-[#e8d4ca] hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="border-t border-white/10 pt-5">
          <p className="text-sm text-[#cdb8ae]">
            © {new Date().getFullYear()} Shantona Rimi. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer