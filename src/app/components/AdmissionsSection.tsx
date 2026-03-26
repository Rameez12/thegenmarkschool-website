import { FileText, Users, CheckCircle, Calendar, AlertCircle, ArrowRight } from "lucide-react";

export function AdmissionsSection() {
  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Fill out the online admission form or visit our campus to collect the form"
    },
    {
      icon: Users,
      title: "Schedule Visit",
      description: "Book a campus tour and meet our teachers to see our facilities firsthand"
    },
    {
      icon: CheckCircle,
      title: "Assessment & Interview",
      description: "Brief interaction with the child and parents to understand learning needs"
    },
    {
      icon: Calendar,
      title: "Enrollment",
      description: "Complete documentation and secure your child's seat"
    }
  ];

  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-[#C1272D]">Admissions</span> Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our founding batch and be part of an educational journey that shapes future leaders
          </p>
        </div>

        {/* Special Offer Banner */}
        <div className="bg-gradient-to-r from-[#C1272D] to-red-600 text-white p-8 rounded-2xl shadow-2xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <div className="flex items-start gap-4 flex-wrap">
              <div className="bg-white text-[#C1272D] p-4 rounded-xl">
                <AlertCircle className="w-8 h-8" />
              </div>
              <div className="flex-1 min-w-[200px]">
                <h3 className="text-2xl font-bold mb-2">Special Founding Batch Offer!</h3>
                <p className="text-lg mb-4">Get 50% OFF on Admission Fee - Limited Seats Available</p>
                <p className="text-sm opacity-90">Offer valid until 31st March 2026 | Only for the first 50 enrollments</p>
              </div>
              <button className="bg-white text-[#C1272D] px-8 py-3 rounded-full hover:bg-gray-100 transition-all flex items-center gap-2 font-semibold">
                Enroll Now <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Admission Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 h-full">
                <div className="absolute -top-4 -left-4 bg-[#2E4A9B] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <step.icon className="w-7 h-7 text-[#2E4A9B]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-300 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Requirements & Contact */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Admission Requirements</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">Completed admission form</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">Copy of child's birth certificate</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">Recent passport-size photographs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">Parent/guardian CNIC copy</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-gray-700">Previous school records (if applicable)</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#2E4A9B] to-blue-700 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Ready to Join?</h3>
            <p className="mb-6 text-blue-50">
              Take the first step towards your child's bright future. Our admissions team is ready to assist you.
            </p>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <p className="text-sm text-blue-100 mb-1">Call us at</p>
                <a href="tel:03135705075" className="text-xl font-bold hover:text-blue-200 transition-colors">0313-5705075</a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <p className="text-sm text-blue-100 mb-1">Visit us at</p>
                <p className="font-semibold">1-A, 1/7, Nazimabad #1</p>
                <p className="font-semibold">Karachi, Pakistan</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <p className="text-sm text-blue-100 mb-1">Admission Hours</p>
                <p className="font-semibold">Monday - Saturday</p>
                <p className="font-semibold">9:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
