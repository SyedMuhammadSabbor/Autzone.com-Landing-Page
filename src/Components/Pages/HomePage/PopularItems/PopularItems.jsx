import React from "react";
import "./PopularItems.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import first from "../../../../images/download.avif";
import CustomCarousel from "../../../reusable/customCarousal.jsx";
import Sale from "./Sale.jsx";
import { Link } from "react-router-dom";
import shopNow from '../../../../images/_fy24p08-catban12-washwax-d.avif'
import pic3 from "../../../../images/3spliticon-fixfinder-d.svg";
import pic2 from "../../../../images/3spliticon-loanatool-d.svg";
import pic1 from "../../../../images/3spliticon-partstesting-d.svg";
import offer1 from '../../../../images/2s-v2-oil-1-d.avif';
import offer2 from '../../../../images/offer-2.avif';
import offer3 from '../../../../images/2s-v2-undercar-1-d.avif';
import offer4 from '../../../../images/2s-undercar-3-d.avif';
import Heading from '../Heading';

export default function PopularItems() {
  const Details = [
    {
      rate: "4.8",
      Value: "(1047)",
      picture: first,
      price: "$276.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rate: "4.8",
      Value: "(1047)",
      picture: first,
      price: "$276.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rate: "4.7",
      Value: "(1047)",
      picture: first,
      price: "$39.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rate: "4.8",
      Value: "(1047)",
      picture: first,
      price: "$58.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rate: "4.8",
      Value: "(1047)",
      picture: first,
      price: "$266.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rate: "4.8",
      Value: "(1047)",
      picture: first,
      price: "$266.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rate: "4.8",
      Value: "(1047)",
      picture: first,
      price: "$266.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rate: "4.8",
      Value: "(1047)",
      picture: first,
      price: "$266.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rate: "4.8",
      Value: "(1047)",
      picture: first,
      price: "$266.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rate: "4.8",
      Value: "(1047)",
      picture: first,
      price: "$266.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rate: "4.8",
      Value: "(1047)",
      picture: first,
      price: "$266.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rate: "4.8",
      Value: "(1047)",
      picture: first,
      price: "$266.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rate: "4.8",
      Value: "(1047)",
      picture: first,
      price: "$266.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rate: "4.8",
      Value: "(1047)",
      picture: first,
      price: "$266.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rate: "4.8",
      Value: "(1047)",
      picture: first,
      price: "$266.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rate: "4.8",
      Value: "(1047)",
      picture: first,
      price: "$266.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rate: "4.8",
      Value: "(1047)",
      picture: first,
      price: "$266.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rate: "4.8",
      Value: "(1047)",
      picture: first,
      price: "$266.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rate: "4.8",
      Value: "(1047)",
      picture: first,
      price: "$266.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rate: "4.8",
      Value: "(1047)",
      picture: first,
      price: "$266.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rate: "4.8",
      Value: "(1047)",
      picture: first,
      price: "$266.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rate: "4.8",
      Value: "(1047)",
      picture: first,
      price: "$266.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rate: "4.8",
      Value: "(1047)",
      picture: first,
      price: "$266.99",
      Info: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
  ];
  const P = [
    {
      p1: "Free Part Testing ",
      p2: " we'll check your weather, starter battery and more",
      p0: pic1,
    },
    {
      p1: "Fix finder solution",
      p2: "Check engine light on?",
      p0: pic2,
    },
    {
      p1: "LOAN-A-TOOL",
      p2: " Need a tool? Borrow one of ours.",
      p0: pic3,
    },
  ];

  return (
    <>
      <div className="popular">
        
      <Heading 
     pov="POPULAR ITEMS"/>
        <div className="carouse">
      <CustomCarousel >
        {Details.map((item, index) => (
          <Sale
            key={index}
            rate={item.rate}
            price={item.price}
            Value={item.Value}
            pic={item.picture}
            Info={item.Info}
          />
        ))}
      </CustomCarousel>
      </div>
        <div className="one-sided">
          {P.map((item, index) => (
            <div className="ones" key={index}>
              <img src={item.p0} alt={index.p0} />
              <div className="texts">
                <p className="hi"> {item.p1}</p>
                <p>{item.p2}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="rise">
        <Link>
        <img src={shopNow} alt="Riseand shine" /></Link>
        </div>
        <div className="offer fort">

        <img src={offer1} alt="" />
        <img src={offer2} alt="offer" />

        </div>

         </div>
          <div className="offer rise fort">
          <img src={offer3} alt="" />
          <img src={offer4} alt="offer" />
          </div>

    </>
  );
}
