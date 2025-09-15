import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: gallery1, alt: "AI Lab Workshop" },
    { src: gallery2, alt: "Tech Presentation" },
    { src: gallery3, alt: "Coding Competition" },
    { src: gallery4, alt: "Networking Event" },
    { src: gallery5, alt: "Robotics Workshop" },
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-wider mb-4">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore moments from our previous events and get a glimpse of the AIURA experience
          </p>
        </div>

        {/* Gallery Placeholder */}
        <div className="text-center py-20">
          <div className="bg-card border border-border rounded-xl p-12 glow-card">
            <h3 className="text-2xl font-bold text-primary mb-4">Gallery Coming Soon</h3>
            <p className="text-muted-foreground text-lg">
              Photos from our events will be updated soon. Stay tuned!
            </p>
          </div>
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Gallery"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;