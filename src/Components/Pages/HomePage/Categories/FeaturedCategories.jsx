import React from 'react'
import "./FeaturedCategories.css"
import Box from './Box'
import im1 from "../../../../images/im1.avif"
import im2 from "../../../../images/im2.webp"
import im3 from "../../../../images/im3.webp"
import im4 from "../../../../images/im4.webp"
import im5 from "../../../../images/im5.avif"
import f1 from "../../../../images/f1.webp"
import f2 from "../../../../images/f2.avif"
import Popular from './Popular'
import a1 from "../../../../images/email-envelope.svg"

import Heading from '../Heading'
const Set =[
    {
        Values : "BATTERIES",
        pic : im1
    },
    {
        Values : "BATTERIES",
        pic : im2
    },
    {
        Values : "BATTERIES",
        pic : im3
    },
    {
        Values : "BATTERIES",
        pic : im4
    },
    {
        Values : "BATTERIES",
        pic : im5
    },
    {
        Values : "BATTERIES",
        pic : im1
    },
    {
        Values : "BATTERIES",
        pic : im1
    }, {
        Values : "BATTERIES",
        pic : im1
    },
    {
        Values : "BATTERIES",
        pic : im1
    },
    {
        Values : "BATTERIES",
        pic : im1
    },
    {
        Values : "BATTERIES",
        pic : im1
    },
    {
        Values : "BATTERIES",
        pic : im1
    }
]
const myData = [ {
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
        "Castrol"]
  }, {
    name: "Alice",
    childs: ["Duralast Gold Chassis", "AC Pro"
       , "ACDelco",
        "Sylvania",
        "Castrol"]
  }, {
    name: "Alice",
    childs: ["Duralast Gold Chassis", "AC Pro"
       , "ACDelco",
        "Sylvania",
        "Castrol"]
  }
]


export default function FeaturedCategories() {
    const isPrimary = true; // Or set it based on your logic

    return (
    <>
    <div>
        <Heading  pov="FEATURED CATEGORIES"></Heading>
    </div>
    <div className="boxes">
    {Set.map((item, index) => (
          <Box
          key={index}
            Values={item.Values}
            pic={item.pic}
          />
        ))}  
    </div>
    <div className="offer rise fort">
          <img src={f1} alt="" />
          <img src={f2} alt="offer" />
          </div>
          <div className="end">
           {myData.map((item, index) => (
          <Popular
            heading={item.name}
            array ={item.childs}
            isPrimary= {isPrimary}
            key ={index}

          />
        ))} 
    </div>
    {/* <div className="last"
    style={{padding :"24px 40px", display: "flex" , justifyContent : "space-between" ,background : "#484848" }}>
        <div className="last-one"
                        style={{padding :"8px", display: "flex" , justifyContent : "space-between" , textAlign:"center"}}>
            <div className='a1'                         
            style={{display: "flex" , justifyContent : "space-around"  }}>
                <img src={a1} alt="" />
                <h2>GET IN THE ZONE</h2>
         </div>
         <div className="a2"  style={{padding :"8px  8px 8px 16px", alignItems :"center"}}>
            <p>Subscribe to get the latest deals, promotions, and offerings.</p>

         </div>
        </div>
        <div className="last-two">
        <label class="az_y6 az_r az_bi az_ci az_fi" for="login">Email</label>
        <div>

        </div>
            
        </div>
    </div> */}

 </>
  )
      
}
