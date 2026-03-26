import { Sparkles, Palette, Lightbulb, MessageCircle } from "lucide-react";

export function AcademicsSection() {
  const curriculumAreas = [
    {
      icon: Sparkles,
      title: "Creativity",
      description: "Fostering imagination through arts, music, and hands-on activities",
      color: "bg-purple-500"
    },
    {
      icon: Palette,
      title: "Collaboration",
      description: "Learning to work together, share ideas, and build friendships",
      color: "bg-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Critical Thinking",
      description: "Developing problem-solving skills and analytical abilities",
      color: "bg-yellow-500"
    },
    {
      icon: MessageCircle,
      title: "Communication",
      description: "Building strong language and expression skills",
      color: "bg-green-500"
    }
  ];

  const programs = [
    {
      level: "Montessori",
      ages: "2-5 Years",
      description: "Early childhood education with hands-on learning materials",
      features: ["Sensorial Activities", "Practical Life Skills", "Language Development"]
    },
    {
      level: "Matric",
      ages: "5-16 Years",
      description: "Comprehensive education following national curriculum standards",
      features: ["Core Subjects", "Science & Technology", "Character Building"]
    },
    {
      level: "O Levels",
      ages: "14-16 Years",
      description: "Cambridge curriculum for international recognition",
      features: ["Global Standards", "Critical Analysis", "University Preparation"]
    }
  ];

  return (
    <section id="academics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#C1272D]">Academic Approach</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We embrace 21st century learning principles to prepare students for a dynamic future
          </p>
        </div>

        {/* 4Cs of Learning */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">21st Century Learning Skills</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculumAreas.map((area, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`${area.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h4>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Programs Offered */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">Educational Programs</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="mb-4">
                  <h4 className="text-2xl font-bold text-[#2E4A9B] mb-1">{program.level}</h4>
                  <p className="text-sm text-gray-500">{program.ages}</p>
                </div>
                <p className="text-gray-700 mb-6">{program.description}</p>
                <div className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C1272D]"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
