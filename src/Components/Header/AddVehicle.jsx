import React from 'react'
import './AddVehicle.css'


export default function AddVehicle(props) {
  let isprimary;
  return (
    <>
       <div className="sign-secs">
              <div className="inners">
                <img src={props.func} alt={props.func} />
                <p>{props.heading}</p>
              </div>
              <img className='arrows' src={props.side} alt="" />
            </div>
    </>
  )
}
