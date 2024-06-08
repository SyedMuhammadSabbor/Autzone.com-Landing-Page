import React from 'react'
import "./FooterBottom.css"

const Central = ['Zoner Services',
    'AutoZone Pro',
    'ALLDATA diy'
    ,'ALLDATA Repair'
    ,'Duralast'
    ,'AutoZone MX']


export default function FooterBottom() {
  return (
    <>
    <div className="fb">
        <h2>OTHER AUTOZONE SITES </h2>
        <div className="central">
            {Central.map((item, index) => (
          <div className='int'>
            <a href=""> {item}  </a> <span>|</span>
          </div>
        ))}  
        </div>
    </div>
    <hr />
    <div className="bottom-end">
      
    </div>
    </>
  )
}
