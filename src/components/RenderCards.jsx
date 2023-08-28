import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dog from "../assets/thedogapi.png";
import cat from "../assets/thecatapi.png";

function RenderCards({ breeds, type }) {
  const navigate = useNavigate();
  const { name } = useParams();

  useEffect(() => {
    
  }, [name, breeds, navigate]);

  const handleCardClick = (breed) => {
    if (type === "dog") {
      navigate(`/dogs/${breed.name}`, { state: { breed, type } });
    } else {
      navigate(`/cats/${breed.name}`, { state: { breed, type } });
    }
  };

  return (
    <>
      {breeds.map((breed) => (
        <div
          key={breed.id}
          className="max-w-sm mx-auto hover:cursor-pointer"
          onClick={() => handleCardClick(breed)}
        >
          <div className="bg-white shadow-md rounded-lg overflow-hidden transition-all ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 duration-500">
            {breed.reference_image_id ? (
              <img
                src={breed.image.url}
                alt={breed.name}
                className="object-cover h-64 w-full"
                style={{ height: "200px", width: "300px" }}
              />
            ) : (
              <div>
                <img
                  src={type === "dog" ? dog : cat}
                  alt={type === "dog" ? "dog" : "cat"}
                  className="object-contain"
                  style={{ height: "200px", width: "300px" }}
                />
                <p className="text-center pt-5">No preview image available.</p>
              </div>
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center">
                {breed.name}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default RenderCards;
