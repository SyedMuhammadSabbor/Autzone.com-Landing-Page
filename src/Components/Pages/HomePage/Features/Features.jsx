import React from "react";
import AZlogo from "../../../../images/fy21p01-featuredicons-rewards-d.svg";
import Timelogo from "../../../../images/featuredicons-fy24-sdd-d.svg";
import Savinglogo from "../../../../images/featuredicons-instore-deal-d.svg";
import Deposit from "../../../../images/85617178-96f8-4376-a206-b4c73e39c187.png";
import Discount from "../../../../images/fy24p08-catban12-completebrakejob-blue-15-d.avif";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Options from "./Options";
import image1 from "../../../../images/a1152e45-1f44-4af2-9535-c29851478ed9.png";
import image2 from "../../../../images/lucas-d.webp";
import image3 from "../../../../images/hero-tax-time-d.avif";
import image4 from "../../../../images/battery-v4-d.avif";
import "./Features.css";
import ClickForDetail from "../ClickForDetail";
import ImageSet from "../ImagesSet";
// import {Data} from './Data'
export default function Features() {
  const imagesToCrouse = [image1, image2, image3, image4];

  const Data = [
    {
      id: 0,
      text: "AUTOZONE REWARDS®",
      para: "Join for free and earn more",
      image: AZlogo,
    },
    {
      id: 1,
      text: "GET IT FAST",
      para: "Pick-up in store today",
      image: Timelogo,
    },
    {
      id: 2,
      text: "STORE SAVINGS",
      para: "View your monthly ad",
      image: Savinglogo,
    },
  ];

  return (
    <>
      <div className="featured">
    <ClickForDetail
    image={Discount}>

    </ClickForDetail>
        <div className="characteristic">
          <div className="carousel set">
            <Carousel
              infinite={true}
              showDots={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              arrows={false}
            >
              {imagesToCrouse.map((imageUrl) => (
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={imageUrl}
                  alt="Logo"
                ></img>
              ))}
            </Carousel>
          </div>
          <div className="options set">
            {Data.map((item, index) => (
              <Options
                key={index}
                text={item.text}
                para={item.para}
                image={item.image}
              /> // Return JSX element
            ))}
          </div>
        </div>
        <br />
        <br />
        <ImageSet pic={Deposit} para="sponsored" showElement="true"></ImageSet>
      </div>
    </>
  );
}
