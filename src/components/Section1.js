import React from "react";
import PenImage from "../images/pen.png";
import BgHouses from "../images/bg-houses.png";
import "../styles/section1.css";

function Section1() {
  return (
    <section className="section-1">
      <div className="top-div">
        <div className="top-left">
          <div className="div-in-top-left">
            <div className="text-1">
              <span className="first-span">NOUS VALORISONS LA</span>
              <br />
              <span className="second-span">CLARITÉ ›</span>
            </div>
            
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia cum
              nemo provident natus consequuntur, cupiditate quaerat ipsam
              aperiam facere architecto voluptatem, itaque unde voluptatibus
              reprehenderit totam. Repellendus nisi odio natus!
            </p>
            <button className="btn cursor-pointer">En savoir plus</button>
          </div>
        </div>

        <div className="top-right">
          <img src={PenImage} className="pen-img" alt="pen-image" />
        </div>
      </div>

      <div className="bottom-div">
        <img className="house-img" src={BgHouses} alt="houses-image" />
      </div>
    </section>
  );
}

export default Section1;
