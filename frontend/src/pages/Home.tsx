import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-lg tracking-[0.3em] text-yellow-400 uppercase">
          Welcome to</p>
        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          Style Frame
        </h1>
        <p className="max-w-2xl text-lg text-gray-300 md:text-xl">
          Capturing timeless memories through creative photography,
          cinematic storytelling, and unforgettable moments.</p>

        <Link
          to="/gallery"
          className="mt-8 rounded-lg border border-yellow-500 px-6 py-3 text-yellow-400 transition hover:bg-yellow-500 hover:text-black">
          View Gallery</Link>
      </div>
    </section>
  );
}

export default Home;