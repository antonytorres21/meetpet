import React from "react";
import { useNavigate } from "react-router-dom";

function RenderCards({ breeds }) {
  const navigate = useNavigate();

  const handleCardClick = (breed) => {
    navigate(`/dogs/${breed.id}`, { state: { breed } });
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
            <img
              src={breed.image.url}
              alt={breed.name}
              className="object-cover h-64 w-full"
              style={{ height: "200px", width: "300px" }}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{breed.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default RenderCards;
