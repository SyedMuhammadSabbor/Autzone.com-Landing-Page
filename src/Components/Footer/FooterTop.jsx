import React from 'react'
import Order from "./Order.jsx"
import locator from "../../images/az_locator.svg" 
import compose from "../../images/az-compose.svg" 
import Popular from '../Pages/HomePage/Categories/Popular.jsx'
import azBox from "../../images/az-box.svg" 
import facebook from "../../images/facebook.svg" 
import instagram from "../../images/Instagram.svg" 
import x from "../../images/x.svg" 
import Youtube from "../../images/youtube.svg"
import "./FooterTop.css" 
const content =[{
  heading : "Locate A Store " ,
  logo : locator
},
{
  heading : "Track Your Order" ,
  logo : azBox
},
{
  heading : "We're Hiring!" ,
  logo : compose
}
]
const logos =[facebook , instagram , x , Youtube]
const dat =  [ {
  name: "Popular Brands",
  childs: ["Duralast Gold Chassis", "AC Pro"
     , "ACDelco",
      "Sylvania",
      "Castrol"]
},
{
  name: "Alice",
  childs: ["Duralast Gold Chassis", "AC Pro"
     , "ACDelco",
      "Sylvania",
      "Castrol",
      "Sylvania",
      "Castrol"]
}, {
  name: "Alice",
  childs: ["Duralast Gold Chassis", "AC Pro"
     , "ACDelco",
      "Sylvania"
    ]
}, {
  name: "Alice",
  childs: ["Duralast Gold Chassis", "AC Pro"
     , "ACDelco",
      "Sylvania",
      "Castrol",
      "Sylvania",
      "Castrol"]
},
{
  name: "Alice",
  childs: ["Duralast Gold Chassis", "AC Pro"
     , "ACDelco",
      ]
}
]

export default function FooterTop() {
  const isPrimary = false ;
  return (
    <>
        <div className="footertop">
         <div className="track">
         {content.map((item, index) => (
          <Order
            heading={item.heading}
            logo ={item.logo}
          />
            ))}
             <div className="logos">
          {logos.map((item, index) => (
            <img src={item} alt="" />
            ))}
          </div>
         </div>
       
        </div>
        <hr />
        <div className="end">
           {dat.map((item, index) => (
          <Popular
            heading={item.name}
            array ={item.childs}
            isPrimary= {isPrimary}
            key ={index}

          />
        ))} 
    </div>

      
    </>
  )
}
