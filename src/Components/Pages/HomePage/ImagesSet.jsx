import React from 'react'
import { Link } from "react-router-dom";

import './Features/Features.css'
export default function ImageSet(props) {
  return (
    <>
     
        <div className="sponsor">
        <Link>
        <img src={props.pic} alt={`S{props.pic} + "image"`} />
        </Link>
     <p style={{fontSize: "12px",float: "right",
    letterSpacing: ".4px",
    lineHeight: "1.333",
    color: "#767676" ,
    textTransform: "none",
    fontWeight: "400"}}>{props.para}</p>
    </div>
    </>
  )
}
