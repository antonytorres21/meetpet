import React, { useState, useEffect, useCallback } from "react";

import { getDogs } from "../functions/funtions";
function Cats() {
  const [breeds, setBreeds] = useState([]);

  const fetchBreeds = useCallback(async () => {
    try {
      const data = await getDogs();
      setBreeds(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds]);
  return (
    <div>
      <div>${breeds.length}</div>
    </div>
  );
}

export default Cats;
