import React, { useState, useEffect, useCallback } from "react";
import RenderCards from "./RenderCards";
import {
  getDogsByPage,
  getDogs,
  calculateTotalPages,
} from "../functions/funtions";
import Pagination from "./Pagination";
import LoadingSpinner from "./LoadingSpinner";
import { IoIosSearch } from "react-icons/io";

function Dogs() {
  const [breeds, setBreeds] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [refreshData, setRefreshData] = useState(false);

  const fetchBreeds = useCallback(async () => {
    try {
      let data;
      let totalPages;

      searchTerm ? console.log("") : console.log(searchTerm);

      if (searchTerm) {
        const response = await getDogs();
        if (!searchTerm.length) {
          const response = await getDogsByPage(currentPage, itemsPerPage);
          data = response.result;
          totalPages = response.totalPages;
        } else {
          data = response.filter((breed) =>
            breed.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          totalPages = calculateTotalPages(data.length, itemsPerPage);
        }
      } else {
        
        const response = await getDogsByPage(currentPage, itemsPerPage);
        data = response.result;
        totalPages = response.totalPages;
      }

      setBreeds(data);
      setTotalPages(totalPages);
    } catch (error) {
      console.error(error);
    }
  }, [currentPage, itemsPerPage, searchTerm]);

  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds, refreshData]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value;

    if (searchTerm && !newSearchTerm) {
      setRefreshData(true);
    }

    setSearchTerm(newSearchTerm);
    setCurrentPage(0);
  };

  const renderCards = () => {
    return <RenderCards breeds={breeds} />;
  };

  return (
    <div className="container mx-auto pt-20">
      <div className="flex justify-between items-center mb-4">
        <div className="px-6 rounded-md items-center justify-center flex">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-l-lg h-8 px-2"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button
            className="bg-gray-300 border-black h-8 w-7 flex items-center justify-center rounded-r-lg"
            onClick={handleItemsPerPageChange}
          >
            <IoIosSearch className="" />
          </button>
        </div>
        <div className="px-6">
          <select
            className="border border-gray-300 px-6 py-2 rounded-md flex"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value="10">10 per page</option>
            <option value="20">20 per page</option>
            <option value="30">30 per page</option>
          </select>
        </div>
      </div>
      {!breeds.length ? (
        !breeds.length && searchTerm.length ? (
          <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-gray-600 text-lg">
              No results found with the search parameters.
            </p>
          </div>
        ) : (
          <LoadingSpinner />
        )
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6">
          {renderCards()}
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default Dogs;
