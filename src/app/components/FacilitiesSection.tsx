import { Building2, FlaskConical, BookOpen, TreePine, Shield, Utensils } from "lucide-react";

export function FacilitiesSection() {
  const facilities = [
    {
      icon: Building2,
      title: "Modern Classrooms",
      description: "Spacious, well-ventilated rooms with natural lighting and comfortable furniture",
      image: "https://images.unsplash.com/photo-1758685733633-a12889098460?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBjbGFzc3Jvb20lMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NDQ2MTE4OXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: FlaskConical,
      title: "Science Lab",
      description: "Well-equipped laboratory for hands-on experiments and discovery",
      image: "https://images.unsplash.com/photo-1758685734153-132c8620c1bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFiJTIwc2Nob29sJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3NDQ2MTE4OXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: BookOpen,
      title: "Library",
      description: "Extensive collection of books and reading materials for all ages",
      image: "https://images.unsplash.com/photo-1633362057669-0c9f66d1f6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwYm9va3MlMjBzaGVsdmVzfGVufDF8fHx8MTc3NDQ2MTE5MHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: TreePine,
      title: "Play Area",
      description: "Safe outdoor space for physical activities and recreation",
      image: "https://images.unsplash.com/photo-1654343532574-53e699fe0cd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlncm91bmQlMjBvdXRkb29yJTIwYWN0aXZpdGllc3xlbnwxfHx8fDE3NzQ0NjExOTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Shield,
      title: "Security",
      description: "24/7 CCTV surveillance and trained security personnel",
      image: "https://images.unsplash.com/photo-1764943630631-b63aadf86e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3NDM1NDcxMHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      icon: Utensils,
      title: "Cafeteria (Planned)",
      description: "Nutritious meals and snacks in a clean environment",
      image: "https://images.unsplash.com/photo-1722912010170-704c382ca530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc3R1ZHlpbmclMjB0b2dldGhlciUyMGdyb3VwfGVufDF8fHx8MTc3NDQ2MTE5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            World-Class <span className="text-[#C1272D]">Facilities</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide a safe, modern, and inspiring environment for learning and growth
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-xl shadow-md">
                  <facility.icon className="w-6 h-6 text-[#2E4A9B]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#C1272D] max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Infrastructure</h3>
          <p className="text-gray-600 mb-4">
            Our campus is designed with children's safety and comfort in mind. Every facility meets international 
            standards and is regularly maintained to provide the best learning environment.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-[#2E4A9B] mt-1">✓</span>
              <span>Climate-controlled classrooms</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2E4A9B] mt-1">✓</span>
              <span>Accessible facilities for all students</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2E4A9B] mt-1">✓</span>
              <span>Regular health and safety inspections</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
