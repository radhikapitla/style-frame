import { FaCameraRetro, FaHeart, FaAward } from "react-icons/fa";

function About() {
  return (
    <section className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-4 text-center text-5xl font-bold text-yellow-400">
          About Style Frame
        </h1>

        <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-300">
          At Style Frame, we believe every photograph tells a unique story.
          Our mission is to capture timeless memories with creativity,
          passion, and professional excellence.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-gray-900 p-8 shadow-lg">
            <FaCameraRetro className="mb-5 text-5xl text-yellow-400" />
            <h2 className="mb-3 text-2xl font-semibold">
              Professional Photography
            </h2>
            <p className="text-gray-300">
              High-quality photography for weddings, portraits, events,
              fashion, and commercial projects.
            </p>
          </div>

          <div className="rounded-xl bg-gray-900 p-8 shadow-lg">
            <FaHeart className="mb-5 text-5xl text-yellow-400" />
            <h2 className="mb-3 text-2xl font-semibold">
              Passion & Creativity
            </h2>
            <p className="text-gray-300">
              Every project is approached with artistic vision and attention
              to detail to create unforgettable memories.
            </p>
          </div>

          <div className="rounded-xl bg-gray-900 p-8 shadow-lg">
            <FaAward className="mb-5 text-5xl text-yellow-400" />
            <h2 className="mb-3 text-2xl font-semibold">
              Trusted Experience
            </h2>
            <p className="text-gray-300">
              Delivering exceptional photography experiences with modern
              equipment and professional editing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;