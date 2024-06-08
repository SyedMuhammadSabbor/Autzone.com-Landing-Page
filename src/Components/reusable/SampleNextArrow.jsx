import React from 'react'

export default function SampleNextArrow(props) {
    const { className, style, onClick  , } = props;

  return (
    <div
      className={className}
      style={{ ...style
      ,background: "#222831", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}
