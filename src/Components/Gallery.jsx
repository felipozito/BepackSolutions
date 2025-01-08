import {useState} from 'react'


const images = [
    {
      url: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
      title: "Mountain Landscape"
    },
    {
      url: "https://images.unsplash.com/photo-1682687221038-404670f09439",
      title: "Ocean View"
    },
    {
      url: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538", 
      title: "Forest Path"
    },
    {
      url: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
      title: "Desert Sunset"
    },
    {
      url: "https://images.unsplash.com/photo-1682687220509-61b8a906ca19",
      title: "City Lights"
    },
    {
      url: "https://images.unsplash.com/photo-1682687220923-c58b9a4592ae",
      title: "Autumn Colors"
    }
  ];
const Gallery = () => {

    const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (index) => {
    console.log(index);
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const previousImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') previousImage();
    if (e.key === 'Escape') closeLightbox();
  };

  return (
    <div><div className="min-h-screen bg-gray-100 p-8">
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Galería de Imágenes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => openLightbox(index)}
          >
            <img
              src={`${image.url}?auto=format&fit=crop&w=500&q=80`}
              alt={image.title}
              className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                {image.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Lightbox */}
    {selectedImage !== null && (
      <div
        className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
        onClick={closeLightbox}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <button
          className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={closeLightbox}
        >
          X
        </button>
        
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            previousImage();
          }}
        >
          -
        </button>

        <img
          src={`${images[selectedImage].url}?auto=format&fit=crop&w=1200&q=90`}
          alt={images[selectedImage].title}
          className="max-h-[90vh] max-w-[90vw] object-contain"
          onClick={(e) => e.stopPropagation()}
        />

        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
        >
         -
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg">
          {images[selectedImage].title}
        </div>
      </div>
    )}
  </div></div>
  )
}

export default Gallery


