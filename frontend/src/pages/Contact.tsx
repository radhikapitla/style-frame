import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <h1 className="text-center text-5xl font-bold mb-5">
          Contact <span className="text-cyan-400">Us</span>
        </h1>
        <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-400">
          For bookings, collaborations, technical assistance or any questions,
          feel free to contact us. We'd love to hear from you.
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl bg-zinc-900 p-8 shadow-xl">
            <form className="space-y-6">
            <div>
            <label className="mb-2 block text-gray-300">Name</label>
              <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-gray-700 bg-black p-4 outline-none transition focus:border-cyan-400"/>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter phone"
                    className="w-full rounded-lg border border-gray-700 bg-black p-4 outline-none transition focus:border-cyan-400"/>
                </div>
              </div>
              <div>
                <label className="mb-2 block text-gray-300">Message</label>
                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-lg border border-gray-700 bg-black p-4 outline-none transition focus:border-cyan-400">          
                  </textarea>
                </div>
              {/* Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  type="submit"
                  className="flex-1 rounded-lg bg-cyan-500 py-3 font-semibold text-white transition duration-300 hover:bg-cyan-600">
                  Submit
                </button>
                <a href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-3 rounded-lg bg-green-500 py-3 font-semibold text-white transition duration-300 hover:bg-green-600">
                  <FaWhatsapp className="text-xl" />
                  WhatsApp</a>
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col justify-center rounded-2xl bg-zinc-900 p-10 shadow-xl">
            <h2 className="mb-8 text-4xl font-bold">
              Contact <span className="text-cyan-400">Information</span>
            </h2>
            <p className="mb-10 text-lg text-gray-400">
              Get in touch with us for photography bookings, weddings,
              events, fashion shoots, collaborations and business inquiries.</p>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="rounded-full bg-cyan-500 p-4">
                  <FaPhoneAlt className="text-xl text-white" />
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-lg font-semibold">
                    +91 9100051607
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="rounded-full bg-cyan-500 p-4">
                  <FaEnvelope className="text-xl text-white" />
                </div>

                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-lg font-semibold">radhikapitla07@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="rounded-full bg-cyan-500 p-4">
                  <FaMapMarkerAlt className="text-xl text-white" />
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-lg font-semibold">
                    Siddipet, Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;