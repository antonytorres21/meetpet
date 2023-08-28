import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";

function BreedDetails() {
  const location = useLocation();
  if (!location.state || !location.state.breed) {
    return <Navigate to="/404" replace />;
  }
  const { breed, type } = location.state;

  

  return (
    <div className="pt-20 px-6">
      <h2 className="text-3xl text-center font-bold mb-4">Breed Details</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Name: {breed.name}</h3>
            <p className="text-xl">
              <span className="font-semibold">Country Code:</span>{" "}
              {breed.country_code ? (
                <span className="flex items-center">
                  <span className="mr-1">{breed.country_code}</span>
                  <img
                    src={`https://flagcdn.com/16x12/${breed.country_code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/32x24/${breed.country_code.toLowerCase()}.png 2x, https://flagcdn.com/48x36/${breed.country_code.toLowerCase()}.png 3x`}
                    width="16"
                    height="12"
                    alt={breed.country_code}
                  />
                </span>
              ) : (
                "Unspecified"
              )}
            </p>

            <p className="text-xl">
              <span className="font-semibold">Bred For:</span>{" "}
              {breed.bred_for ? breed.bred_for : "unspecified"}
            </p>
            <p className="text-xl">
              <span className="font-semibold">Breed Group:</span>{" "}
              {breed.breed_group ? breed.breed_group : "unspecified"}
            </p>
            <p className="text-xl">
              <span className="font-semibold">Life Span:</span>{" "}
              {breed.life_span ? breed.life_span : "unspecified"}
            </p>
          </div>
          <div>
            {breed.height && (
              <>
                <p className="text-xl">
                  <span className="font-semibold">Weight:</span>{" "}
                  {breed.weight.imperial} lbs
                </p>
                <p className="text-xl">
                  <span className="font-semibold">Height:</span>{" "}
                  {breed.height.imperial} in
                </p>
              </>
            )}
            <p className="text-xl">
              <span className="font-semibold">Temperament:</span>{" "}
              {breed.temperament ? breed.temperament : "unspecified"}
            </p>
            <p className="text-xl">
              <span className="font-semibold">Origin:</span>{" "}
              {breed.origin ? breed.origin : "unspecified"}
            </p>
          </div>
        </div>
      </div>

      {breed.description && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-4">Description</h3>
          <p className="text-xl">{breed.description}</p>
        </div>
      )}

      <div className="mt-8 mb-16 flex items-center justify-center">
        <ImageCarousel breedId={breed.id} name={breed.name} type={type} />
      </div>
    </div>
  );
}

export default BreedDetails;
