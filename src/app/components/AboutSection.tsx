import { Target, Eye, Heart } from "lucide-react";
import logoImage from "../../assets/Images/logo.png";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img src={logoImage} alt="The Genmark School Logo" className="h-20 w-20" />
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  About <span className="text-[#C1272D]">The Genmark School</span>
                </h2>
                <p className="text-[#2E4A9B]">A Project of READS Collegiate</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to The Genmark School, where young minds grow, explore, and succeed. As a proud project 
              of READS Collegiate, we bring decades of educational excellence to create a nurturing environment 
              for the leaders of tomorrow.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our founding batch represents the beginning of an extraordinary journey. We are committed to providing 
              world-class Montessori education that emphasizes holistic development, critical thinking, and creativity. 
              Each child is unique, and our approach ensures that every student receives the attention and support 
              they need to thrive.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#C1272D]">
              <p className="text-gray-700 italic">
                "Our vision is to create a happy place for little learners where education meets innovation, 
                and every child discovers their true potential in a safe and inspiring environment."
              </p>
              <p className="mt-3 text-sm text-[#2E4A9B] font-semibold">— Founding Principal, READS Collegiate</p>
            </div>
          </div>

          {/* Right Content - Mission & Vision */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#2E4A9B] p-3 rounded-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To nurture young minds with happiness through modern Montessori education, fostering creativity, 
                collaboration, critical thinking, and communication skills that prepare children for success in 
                the 21st century.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#C1272D] p-3 rounded-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become a leading educational institution recognized for excellence in early childhood education, 
                creating a generation of confident, compassionate, and capable learners.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-cyan-500 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Values</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#C1272D] mt-1">•</span>
                  <span>Excellence in education and continuous improvement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C1272D] mt-1">•</span>
                  <span>Respect, integrity, and responsibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C1272D] mt-1">•</span>
                  <span>Innovation in teaching and learning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
