import React from 'react'
import "./Features.css";
export default function Options(props) {
  return (
    <>
            <div className="data">
              <div className="one-side">
              <img src={props.image} alt={props.image} />
              <div className="text">
                <h2>{props.text}</h2>
                <p>{props.para}</p>
              </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                role="img"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="m17.522 11-2.364-2.28 1.388-1.44L21.441 12l-4.895 4.72-1.388-1.44L17.522 13H4v-2h13.522Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
    </>
  )
}
