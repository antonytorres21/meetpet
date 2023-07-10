import React from "react";
import { useLocation } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";

function BreedDetails() {
  const location = useLocation();
  const { breed, type } = location.state;

  return (
    <div className="pt-20 px-6">
      <h2 className="text-3xl text-center font-bold mb-4">Breed Details</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8 ">
        <div className="grid grid-cols-2 gap-6 ">
          <div>
            <h3 className="text-xl font-semibold">ID: {breed.id}</h3>
            <h3 className="text-xl font-semibold">Name: {breed.name}</h3>
            <h3 className="text-xl font-semibold">
              Country Code: {breed.country_code}
            </h3>
            <h3 className="text-xl font-semibold">
              Bred For: {breed.bred_for}
            </h3>
            <h3 className="text-xl font-semibold">
              Breed Group: {breed.breed_group}
            </h3>
            <h3 className="text-xl font-semibold">
              Life Span: {breed.life_span}
            </h3>
          </div>
          <div>
            {breed.height ? (
              <>
                <h3 className="text-xl font-semibold">
                  Weight: {breed.weight.imperial} lbs
                </h3>
                <h3 className="text-xl font-semibold">
                  Height: {breed.height.imperial} in
                </h3>
              </>
            ) : (
              <></>
            )}
            <h3 className="text-xl font-semibold">
              Temperament: {breed.temperament}
            </h3>
            <h3 className="text-xl font-semibold">Origin: {breed.origin}</h3>
          </div>
        </div>
      </div>

      {breed.description ? (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold">
            Description: {breed.description}
          </h3>
        </div>
      ) : (
        <></>
      )}

      <div className="mt-8 mb-16 flex items-center justify-center">
        <ImageCarousel breedId={breed.id} name={breed.name} type={type} />
      </div>
    </div>
  );
}

export default BreedDetails;
