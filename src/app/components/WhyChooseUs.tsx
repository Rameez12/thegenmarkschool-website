import { BookOpen, Users, Shield, Award } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: BookOpen,
      title: "Modern Montessori Curriculum",
      description: "21st century learning approach focusing on Creativity, Collaboration, Critical Thinking, and Communication."
    },
    {
      icon: Shield,
      title: "Safe & Caring Environment",
      description: "A nurturing space where children feel secure and supported to explore and learn with confidence."
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Limited students per class ensuring personalized attention and individualized learning paths."
    },
    {
      icon: Award,
      title: "Qualified Teachers",
      description: "Experienced educators dedicated to fostering each child's unique potential and development."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-[#C1272D]">The Genmark School?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide a premium educational experience that prepares your child for success in the modern world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-[#2E4A9B] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
