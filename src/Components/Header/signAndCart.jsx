import React from 'react'
import './Header.css'


export default function SignAndCart(props) {
  let isprimary;
  return (
    <>
       <div className="sign-sec">
              <div className="inner">
                <img src={props.func} alt={props.func} />
                <p>{props.heading}</p>
              </div>
              <img src={props.side} alt="" />
            </div>
    </>
  )
}
