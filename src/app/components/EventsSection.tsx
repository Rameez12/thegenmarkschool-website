import { Calendar, Bell } from "lucide-react";

export function EventsSection() {
  const events = [
    {
      date: "March 20",
      year: "2026",
      title: "Open House Day",
      description: "Visit our campus, meet our teachers, and explore our facilities. Refreshments will be provided.",
      time: "10:00 AM - 2:00 PM",
      type: "Campus Tour"
    },
    {
      date: "March 25",
      year: "2026",
      title: "Parent Information Session",
      description: "Learn about our Montessori curriculum, teaching methodology, and admission process.",
      time: "3:00 PM - 5:00 PM",
      type: "Webinar"
    },
    {
      date: "March 31",
      year: "2026",
      title: "Last Day - Special Offer",
      description: "Final day to avail 50% discount on admission fee for our founding batch. Limited seats!",
      time: "All Day",
      type: "Deadline"
    },
    {
      date: "April 15",
      year: "2026",
      title: "Founding Batch Orientation",
      description: "Welcome session for parents and students of our inaugural class. Meet the team!",
      time: "11:00 AM - 1:00 PM",
      type: "Orientation"
    }
  ];

  const announcements = [
    "Registration for Montessori program now open - Limited seats available",
    "Campus tours available every Saturday - Book your visit today",
    "50% off admission fee extended until March 31st, 2026",
    "New facilities including Science Lab and Library ready for founding batch"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Events & <span className="text-[#C1272D]">Announcements</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest events and important announcements
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Events List */}
          <div className="lg:col-span-2 space-y-6">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row">
                  <div className="bg-gradient-to-br from-[#2E4A9B] to-blue-700 text-white p-6 sm:w-32 flex-shrink-0 flex flex-col items-center justify-center">
                    <div className="text-3xl font-bold">{event.date.split(' ')[1]}</div>
                    <div className="text-sm uppercase">{event.date.split(' ')[0]}</div>
                    <div className="text-xs mt-1 opacity-90">{event.year}</div>
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                      <span className="text-xs bg-blue-100 text-[#2E4A9B] px-3 py-1 rounded-full whitespace-nowrap ml-2">
                        {event.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{event.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Announcements Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[#C1272D] to-red-600 text-white p-8 rounded-2xl shadow-lg sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Latest Updates</h3>
              </div>
              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <p className="text-sm text-white leading-relaxed">{announcement}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 bg-white text-[#C1272D] py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-2 border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Don't Miss Out!</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Register for our upcoming events and be the first to know about important updates regarding admissions and school activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#2E4A9B] text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all">
              Book Campus Tour
            </button>
            <button className="bg-white border-2 border-[#2E4A9B] text-[#2E4A9B] px-8 py-3 rounded-full hover:bg-[#2E4A9B] hover:text-white transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
