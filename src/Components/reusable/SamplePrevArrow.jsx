import React from 'react'

export default function SamplePrevArrow(props) {
    const { className, style, onClick  , showElement} = props;

  return (
    <>
    <div
      className={className}
      style={{ ...style,
      display: showElement ? 'block' : 'none',  background: "#222831", borderRadius: "50%" }}
      onClick={onClick}
    /> 
    </>
  )
}
