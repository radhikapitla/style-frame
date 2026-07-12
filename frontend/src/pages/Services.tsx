import {
  FaCamera,
  FaRing,
  FaChild,
  FaVideo,
  FaBirthdayCake,
  FaBriefcase,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaRing className="text-5xl text-yellow-400" />,
      title: "Wedding Photography",
      description:
        "Capture every beautiful moment of your special day with timeless memories.",
      },
    {
      icon: <FaCamera className="text-5xl text-yellow-400" />,
      title: "Portrait Photography",
      description:
        "Professional indoor and outdoor portraits for individuals and families.",
    },
    {
      icon: <FaChild className="text-5xl text-yellow-400" />,
      title: "Kids Photography",
      description:
        "Creative and fun photo sessions designed especially for children.",
    },
    {
      icon: <FaBirthdayCake className="text-5xl text-yellow-400" />,
      title: "Birthday Events",
      description:
        "Capture joyful birthday celebrations with professional photography.",
    },
    {
      icon: <FaVideo className="text-5xl text-yellow-400" />,
      title: "Cinematic Videography",
      description:
        "High-quality cinematic videos for weddings, events, and promotions.",
    },
    {
      icon: <FaBriefcase className="text-5xl text-yellow-400" />,
      title: "Commercial Shoots",
      description:
        "Branding, product photography, and professional business shoots.",
    },
  ];

  return (
    <section className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 text-center text-5xl font-bold text-yellow-400">
          Our Services
        </h1>
        <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-300">
          We provide professional photography and videography services
          designed to preserve your most precious memories.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl bg-gray-900 p-8 transition duration-300 hover:scale-105 hover:border hover:border-yellow-400">            
              <div className="mb-6">{service.icon}</div>
              <h2 className="mb-4 text-2xl font-semibold">
                {service.title}
              </h2>
              <p className="text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;