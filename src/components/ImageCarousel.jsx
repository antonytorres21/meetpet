import React, { useEffect, useState } from "react";
import { getImages } from "../functions/funtions";

function ImageCarousel({ breedId, name }) {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { result } = await getImages(breedId);
        setImages(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, [breedId]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? images.length - 1 : newIndex;
    });
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleSelectImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-80 bg-white shadow-md rounded-lg p-6 mb-8">
        {images.length > 0 ? (
          <div className="relative">
            <button
              className="left-2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full absolute top-1/2 hover:bg-blue/50"
              onClick={handlePrevImage}
            >
              Prev
            </button>
            <img
              src={images[currentImageIndex].url}
              alt={name}
              className="w-full h-auto rounded"
            />
            <button
              className="right-2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full absolute top-1/2 hover:bg-green/50 "
              onClick={handleNextImage}
            >
              Next
            </button>
            <div className="flex items-center justify-center mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full mx-1 focus:outline-none ${
                    index === currentImageIndex ? "bg-gray-800" : "bg-gray-300"
                  }`}
                  onClick={() => handleSelectImage(index)}
                ></button>
              ))}
            </div>
          </div>
        ) : (
          <p>No images available.</p>
        )}
      </div>
    </div>
  );
}

export default ImageCarousel;
