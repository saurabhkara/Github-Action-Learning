import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the world, One Country at one time
          </h1>
          <p className="paragraph">
            Discover the history,culture and the beauty of every nation. Sort,
            search and filter through various countries to find the details you.
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Explore Now <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-image">
          <img
            src="/images/world.png"
            alt="World pic"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
}
