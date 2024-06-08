import React from 'react'
import { Link } from 'react-router-dom';
export default function Popular(props) {
    const array = props.array;
    const isPrimary = props.isPrimary; // Assuming a boolean prop

  return (
    <>
    <div className={ isPrimary ? "cont" : "footeruse"}>
    <div className={ isPrimary ? "naming" : "heads"}>
            <h2>{props.heading}</h2>
        </div>
       { array.map((item, index) => (
            <div className={ isPrimary ? "childs" : "bodies"}>
                <p>{item}</p>
            </div>
        ))
        }  
        <div  className={isPrimary ? "childs" : "ending"}>
        <Link>Show all</Link>

        </div>
    </div>

    </>
  )
}
