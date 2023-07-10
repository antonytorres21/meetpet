import React from "react";
import { useParams } from "react-router-dom";

function BreedDetails() {
  const { id } = useParams();

  return (
    <div className="pt-20">
      <h2>Breed Details</h2>
      <p>Breed ID: {id}</p>
    </div>
  );
}

export default BreedDetails;
