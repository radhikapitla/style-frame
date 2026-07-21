import { useEffect, useState } from "react";
import axios from "axios";
import { FaDownload, FaTrash, FaTimes } from "react-icons/fa";

interface GalleryImage {
  id: number;
  title: string;
  image_url: string;
}
function Gallery() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] =useState<GalleryImage | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const isAdmin =localStorage.getItem("isAdmin") === "true";

  useEffect(() => {
    fetchImages();
  }, []);
  const fetchImages = async () => {
    try {
      const res = await axios.get(
        "https://style-frame-1i9s.onrender.com/api/gallery"
      );
      setGalleryImages(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteImage = async () => {
  if (!selectedImage) return;
   try {
    await axios.delete(
      `https://style-frame-1i9s.onrender.com/api/gallery/${selectedImage.id}`,
      {
    headers: {
      "x-admin": localStorage.getItem("isAdmin") || "false",
    },
    }
    );
    fetchImages();
    setSelectedImage(null);
    setShowDeleteModal(false);
    } catch (err) {
    console.log(err);
    }
    };

  return (
    <section className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 text-center text-5xl font-bold text-yellow-400">
          Gallery
        </h1>
        <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-300">
          A collection of our favorite moments captured through creativity and passion.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedImage(photo)}
              className="cursor-pointer overflow-hidden rounded-xl bg-gray-900 shadow-lg transition duration-300 hover:scale-105">
              <img src={`https://style-frame-1i9s.onrender.com/uploads/${photo.image_url}`}
                alt={photo.title} className="h-64 w-full object-cover"/>
              <div className="p-5">
                <h2 className="text-xl font-semibold text-yellow-400">
                  {photo.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
       <div
       className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
       onClick={() => setSelectedImage(null)} >
       <div
       className="relative w-full max-w-5xl rounded-2xl bg-gray-900 p-6"
       onClick={(e) => e.stopPropagation()}>
       {/* Close */}
       <button
        onClick={() => setSelectedImage(null)}
        className="absolute right-5 top-5 text-3xl text-white hover:text-red-500">
        <FaTimes />
       </button>
       {/* Image */}
       <img
        src={`https://style-frame-1i9s.onrender.com/uploads/${selectedImage.image_url}`}
        alt={selectedImage.title}
        className="mx-auto max-h-[75vh] rounded-xl object-contain"/>
       <h2 className="mt-6 text-center text-3xl font-bold text-yellow-400">
        {selectedImage.title}
       </h2>
       <div className="mt-8 flex justify-center gap-4">
        <a href={`https://style-frame-1i9s.onrender.com/uploads/${selectedImage.image_url}`}
          download
          className="flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600">
          <FaDownload />Download </a>
        {isAdmin && (
        <button onClick={() => setShowDeleteModal(true)}
        className="flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700">
        <FaTrash />Delete</button>
        )}
        </div>
       </div>
      </div>
      )}
      {showDeleteModal && (
      <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70">
      <div className="w-[400px] rounded-xl bg-gray-900 p-8 shadow-2xl">
       <h2 className="mb-4 text-center text-2xl font-bold text-red-500">Delete Image</h2>
       <p className="text-center text-gray-300">delete this image?</p>
       <div className="mt-8 flex justify-center gap-5">
        <button onClick={() => setShowDeleteModal(false)}
          className="rounded-lg bg-gray-600 px-6 py-3 font-semibold hover:bg-gray-700">Cancel</button>
        <button
          onClick={deleteImage}
          className="rounded-lg bg-red-600 px-6 py-3 font-semibold hover:bg-red-700">
          Delete
        </button>
      </div>
    </div>
   </div>
   )}
      </div>
    </section>
  );
}
export default Gallery;
