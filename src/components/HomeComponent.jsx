import React from "react";
import fondoHome from "../assets/fondoHome.jpg";
function HomeComponent() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${fondoHome})` }}
      >
        <div className="bg-blue-light/50 flex items-center justify-center h-screen">
          <div className="container mx-auto px-6 md:px-12 xl:px-32">
            <div className="mb-16 justify-center pt-20 items-center text-center">
              <h2 className="mb-4 text-center text-2xl text-white font-bold md:text-4xl">
                Welcome to the community of dog and cat lovers!
              </h2>
              <p className="text-white lg:w-8/12 lg:mx-auto">
                Discover the fascinating world of our faithful four-legged
                companions with our web application. Have you ever wondered what
                secrets your beloved pets hold? Look no further! Immerse
                yourself in an exciting journey where you can learn more about
                the history, care, curiosities, and much more about dogs and
                cats. <br /> Whether you have a playful dog or a mysterious cat,
                this platform is designed to satisfy your curiosity and help you
                better understand your furry friend. From expert advice to fun
                and quirky facts, we're here to provide you with valuable
                information and endless entertainment.
                <br />
                <br />
                Are you ready to explore the captivating universe of dogs and
                cats? Join us and discover everything you need to know to be the
                best companion to your four-legged friend!
                <br />
                Get ready for an adventure filled with love, fun, and knowledge
                with our web application for dogs and cats!
                <br />
                <br />
                Start exploring right away!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
