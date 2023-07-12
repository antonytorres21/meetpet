import React from "react";
import fondoHome from "../assets/fondoHome.jpg";

function HomeComponent() {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${fondoHome})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-blue-light/50 flex items-center justify-center h-screen">
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="mb-16 justify-center pt-20 items-center text-center">
            <div className="mx-auto  sm:pt-20 sm:pb-10 min-[320px]:pt-20 min-[320px]:pb-10 md:pt-10 md:pb-5">
              <h2 className="mb-4 xl:text-5xl text-2xl md:text-4xl text-white font-bold">
                Welcome to the community of dog and cat lovers!
              </h2>
              <p className="text-white text-base xl:text-xl sm:text-sm min-[320px]:text-xs md:text-base ">
                Discover the fascinating world of our faithful four-legged
                companions with our web application. Have you ever wondered what
                secrets your beloved pets hold? Look no further! Immerse
                yourself in an exciting journey where you can learn more about
                the history, care, curiosities, and much more about dogs and
                cats.
                <br />
                <br />
                Whether you have a playful dog or a mysterious cat, this
                platform is designed to satisfy your curiosity and help you
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
