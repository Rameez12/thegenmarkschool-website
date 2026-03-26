import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import logoImage from "../../assets/Images/logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#2E4A9B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="The Genmark School" className="h-14 w-14" />
              <div>
                <h3 className="font-bold text-lg">THE GENMARK SCHOOL</h3>
                <p className="text-sm text-blue-200">A Project of READS Collegiate</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">
              Nurturing young minds with happiness through modern Montessori education and 21st century learning.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-blue-100">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('academics')} className="hover:text-white transition-colors">
                  Academics
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('facilities')} className="hover:text-white transition-colors">
                  Facilities
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('admissions')} className="hover:text-white transition-colors">
                  Admissions
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="hover:text-white transition-colors">
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-4">Programs</h4>
            <ul className="space-y-3 text-blue-100">
              <li className="hover:text-white transition-colors cursor-pointer">Montessori (Ages 2-5)</li>
              <li className="hover:text-white transition-colors cursor-pointer">Matric (Ages 5-16)</li>
              <li className="hover:text-white transition-colors cursor-pointer">O Levels (Ages 14-16)</li>
              <li className="hover:text-white transition-colors cursor-pointer">After School Activities</li>
              <li className="hover:text-white transition-colors cursor-pointer">Summer Programs</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:03135705075" className="hover:text-white transition-colors">
                    0313-5705075
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@genmarkschool.edu.pk" className="hover:text-white transition-colors">
                    info@genmarkschool.edu.pk
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p>1-A, 1/7, Nazimabad #1</p>
                  <p>Karachi, Pakistan</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-400/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-100">
            <p>© {currentYear} The Genmark School. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
