import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import logoImage from "../../assets/Images/logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img src={logoImage} alt="The Genmark School" className="h-14 w-14" />
            <div>
              <h1 className="text-[#C1272D] font-bold text-lg leading-tight">THE GENMARK SCHOOL</h1>
              <p className="text-[#2E4A9B] text-xs">A Project of READS Collegiate</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#2E4A9B] transition-colors">About</button>
            <button onClick={() => scrollToSection('academics')} className="text-gray-700 hover:text-[#2E4A9B] transition-colors">Academics</button>
            <button onClick={() => scrollToSection('facilities')} className="text-gray-700 hover:text-[#2E4A9B] transition-colors">Facilities</button>
            <button onClick={() => scrollToSection('admissions')} className="text-gray-700 hover:text-[#2E4A9B] transition-colors">Admissions</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-[#2E4A9B] transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#2E4A9B] transition-colors">Contact</button>
          </nav>

          {/* Contact Button */}
          <a href="tel:03135705075" className="hidden md:flex items-center gap-2 bg-[#C1272D] text-white px-5 py-2.5 rounded-full hover:bg-[#a01f25] transition-colors">
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#2E4A9B] transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('academics')} className="text-gray-700 hover:text-[#2E4A9B] transition-colors text-left">Academics</button>
              <button onClick={() => scrollToSection('facilities')} className="text-gray-700 hover:text-[#2E4A9B] transition-colors text-left">Facilities</button>
              <button onClick={() => scrollToSection('admissions')} className="text-gray-700 hover:text-[#2E4A9B] transition-colors text-left">Admissions</button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-[#2E4A9B] transition-colors text-left">Gallery</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#2E4A9B] transition-colors text-left">Contact</button>
              <a href="tel:03135705075" className="flex items-center gap-2 bg-[#C1272D] text-white px-5 py-2.5 rounded-full hover:bg-[#a01f25] transition-colors w-fit">
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
