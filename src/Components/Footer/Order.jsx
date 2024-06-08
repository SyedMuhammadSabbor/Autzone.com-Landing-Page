import React from 'react'

export default function Order(props) {
  return (
    <div>
      <div className="order">
        <img src={props.logo} alt="" />
        <p>{props.heading}</p>
      </div>
    </div>
  )
}
