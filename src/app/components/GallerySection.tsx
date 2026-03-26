import admissionPromo1 from "../../assets/Images/genmark_smp1.png";
import admissionPromo2 from "../../assets/Images/genmark_smp2.png";
import welcomePromo from "../../assets/Images/genmark_smp3.png";

export function GallerySection() {
  const galleryImages = [
    {
      src: welcomePromo,
      alt: "Welcome to The Genmark School",
      category: "Campus"
    },
    {
      src: admissionPromo1,
      alt: "Montessori Admissions Now Open",
      category: "Admissions"
    },
    {
      src: admissionPromo2,
      alt: "Happy Learning Environment",
      category: "Students"
    },
    {
      src: "https://images.unsplash.com/photo-1758685733633-a12889098460?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBjbGFzc3Jvb20lMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NDQ2MTE4OXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Modern Classroom",
      category: "Facilities"
    },
    {
      src: "https://images.unsplash.com/photo-1722912010170-704c382ca530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc3R1ZHlpbmclMjB0b2dldGhlciUyMGdyb3VwfGVufDF8fHx8MTc3NDQ2MTE5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Students Learning Together",
      category: "Students"
    },
    {
      src: "https://images.unsplash.com/photo-1764943630631-b63aadf86e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3NDM1NDcxMHww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "School Building",
      category: "Campus"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            School <span className="text-[#C1272D]">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into life at The Genmark School - where learning meets joy
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-2 inline-block">
                    {image.category}
                  </span>
                  <p className="font-semibold">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Want to See More?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Book a campus tour to experience our facilities in person and see how we create a nurturing environment for your child.
          </p>
          <button className="bg-[#2E4A9B] text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all inline-flex items-center gap-2">
            Schedule Campus Visit
          </button>
        </div>
      </div>
    </section>
  );
}
