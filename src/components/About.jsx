import React from "react";
import theDogApiImage from "../assets/thedogapi.png";
import theCatApiImage from "../assets/thecatapi.png";

function About() {
  return (
    <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            About the Project
          </h2>
          <p className="text-lg text-gray-600">
            This page was designed and created by Roig Antony Torres López,
            using two APIs, namely thedogApi and thecatApi.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <a
                href="https://thedogapi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={theDogApiImage}
                  alt="The Dog API"
                  className="rounded-lg mx-auto h-48 "
                />
              </a>
              <h3 className="mt-6 text-xl font-semibold text-gray-800 text-center">
                The Dog API
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                The Dog API provides access to a large database of dog breeds.
                It offers information about various breeds, including images,
                characteristics, and more.
              </p>
            </div>
            <div>
              <a
                href="https://thecatapi.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={theCatApiImage}
                  alt="The Cat API"
                  className="rounded-lg mx-auto h-48 translate-y-2"
                />
              </a>
              <h3 className="mt-6 text-xl font-semibold text-gray-800 text-center">
                The Cat API
              </h3>
              <p className="mt-2 text-gray-600">
                The Cat API is a comprehensive resource for cat information. It
                allows users to explore different cat breeds, their images,
                temperaments, and other details.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <p className="text-lg text-gray-600 text-center">
            The purpose of this page, in addition to serving as a knowledge
            practice, is to provide anyone with information about different
            registered breeds of dogs and cats. It also serves as an example of
            the developer's work or capabilities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
