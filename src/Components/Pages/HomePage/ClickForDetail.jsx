import React from 'react'
import './Features/Features.css'
export default function ClickForDetail(props) {
  const styled = {
    boxShadow: props.showShadow ? '0 1px 5px rgba(32,33,36,.12), 0 2px 2px rgba(32,33,36,.14)' : 'none'
  };

  return (
    <div>
            <div className="feature">
          <img  style={styled}   className="f-image " src={props.image} alt="" />
          <div className="adding">
            <a  href="">
              Click for details
            </a>
          </div>
        </div>
    </div>
  )
}
