import React from 'react'
import "../PopularItems/PopularItems.css"
import Rating from '../PopularItems/Rating'
import './SponsoredProducts.css'
export default function Card(props) {
  return (
    <div>
           <div className="market market-2">
        <div className="market-pic">
          <img src={props.pic} alt="" />
        </div>
        <div className="Product-name">{props.Information} </div>
        <div className="advertise">
          <Rating rating={4} /> 
          <span className="rate">{props.rates}</span>
          <span className="sale">{props.Values}</span>
        </div>
        <div className="am "><span className='sizing'>$</span>{props.prices}<span className='sizing'>{props.pense}</span></div>
      </div>
    </div>
  )
}
