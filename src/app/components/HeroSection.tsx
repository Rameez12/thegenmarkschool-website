import { ArrowRight, Calendar } from "lucide-react";
import heroImage from "../../assets/Images/heroImage.png";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block bg-red-100 text-[#C1272D] px-4 py-2 rounded-full text-sm">
              🎓 Now Enrolling for Founding Batch 2026
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Admissions Open for Our <span className="text-[#C1272D]">Founding Batch</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Join The Genmark School where we nurture young minds with happiness through modern Montessori education. 
              Experience 21st century learning focused on Creativity, Collaboration, Critical Thinking, and Communication.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <p className="text-sm text-gray-700">
                <strong>Limited Seats Available!</strong> Get 50% OFF on Admission Fee. Offer valid until 31st March 2026
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('admissions')}
                className="bg-[#C1272D] text-white px-8 py-4 rounded-full hover:bg-[#a01f25] transition-all hover:shadow-lg flex items-center justify-center gap-2"
              >
                Apply Now <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-white border-2 border-[#2E4A9B] text-[#2E4A9B] px-8 py-4 rounded-full hover:bg-[#2E4A9B] hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" /> Book a Visit
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="The Genmark School - 21st Century Learning" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden lg:block">
              <div className="text-3xl font-bold text-[#2E4A9B]">50%</div>
              <div className="text-sm text-gray-600">OFF Admission Fee</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-[#C1272D] text-white p-6 rounded-2xl shadow-xl hidden lg:block">
              <div className="text-3xl font-bold">2026</div>
              <div className="text-sm">Founding Batch</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
