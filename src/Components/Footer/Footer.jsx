import React from 'react'
import "./Footer.css"
import FooterTop from "./FooterTop.jsx"
import FooterBottom from './FooterBottom/FooterBottom.jsx'


export default function Footer() {
  return (
    <>
      <div className="footer">
        <FooterTop/>
        <FooterBottom/>
      </div>
    </>
  )
}
