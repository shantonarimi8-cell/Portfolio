import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#ead8cc] shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-2xl font-bold text-[#5a2d1c] hover:text-[#8b4a32] transition-colors"
        >
          Shantona Rimi
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          <a href="#home" className="text-gray-700 hover:text-[#8b4a32] font-medium transition-colors">
            Home
          </a>

          <a href="#about" className="text-gray-700 hover:text-[#8b4a32] font-medium transition-colors">
            About
          </a>

          <a href="#skills" className="text-gray-700 hover:text-[#8b4a32] font-medium transition-colors">
            Skills
          </a>

          <a href="#projects" className="text-gray-700 hover:text-[#8b4a32] font-medium transition-colors">
            Projects
          </a>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-[#5a2d1c] text-white font-semibold shadow-md hover:bg-[#3b1f14] hover:-translate-y-0.5 transition-all duration-300"
          >
            Contact
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-[#5a2d1c]"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#ead8cc] shadow-lg">

          <div className="px-6 py-5 space-y-4">

            <a
              href="#home"
              onClick={closeMenu}
              className="block text-gray-700 font-medium hover:text-[#8b4a32]"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="block text-gray-700 font-medium hover:text-[#8b4a32]"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="block text-gray-700 font-medium hover:text-[#8b4a32]"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="block text-gray-700 font-medium hover:text-[#8b4a32]"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="block text-center px-5 py-3 rounded-xl bg-[#5a2d1c] text-white font-semibold"
            >
              Contact
            </a>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar