import React from 'react'
import './Features/Features.css'
export default function Heading(props) {
  return (
    <>
     <div className="uppermost">
       <h2 className="heading">{props.pov}</h2>
        <div className="underline"></div>

       </div>
    </>
  )
}
