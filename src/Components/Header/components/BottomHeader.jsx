import React from "react";
import { Link } from "react-router-dom";
import "./BottomHeader.css";
import SignAndCart from "../signAndCart";
import menuIcon from "../../../images/hamburger_icon.svg";
import car from "../../../images/vehicle-new.svg";
import AddVehicle from "../AddVehicle";
import SideArrow from "../../../images/header-arrow.svg";
import Search from "../../../images/icon-search-20x20.svg";
import Map from "../../../images/icon-store-selected-d.svg";

const BottomHeader = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <SignAndCart 
        func={menuIcon} 
        heading="Menu"
        ></SignAndCart>
      </div>
      <div className="navbar-center">
        <AddVehicle
          func={car}
          heading="Add Vehicle"
          side={SideArrow}
        ></AddVehicle>
        <div className="search-bar">
         <button className="search"><img src={Search} alt="" /></button>
          <input type="text" placeholder="Find Parts and Product" />
        </div>
      </div>
      <div className="navbar-right">
        <i className="location-icon fa fa-map-marker" />
    

        <div className="headings">
            <img src={Map} alt="" />
            <div className="lines">
              <p>
              4394 Summer Ave
              </p>
              <p className="ext">
              PEN UNIT MIDNIGHT
              </p>
            </div>
            <img className="" src={SideArrow} alt="" />
              
           
        </div>
      
      </div>
    </nav>
  );
};

export default BottomHeader;
