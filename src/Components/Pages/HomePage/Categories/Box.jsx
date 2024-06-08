import React from "react";
import "./FeaturedCategories.css";
export default function Box(props) {
  return (
    <>
      <div className="box">
        <div>
        <img src={props.pic} alt="" />
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "unset",
            letterSpacing: ".038rem",
          }}
        >
          {props.Values}
        </p>
        </div>
      
      </div>
    </>
  );
}
