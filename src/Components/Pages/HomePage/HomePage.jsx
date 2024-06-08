import React from 'react'
import './HomePage.css'
import Features from './Features/Features'
import PopularItems from './PopularItems/PopularItems'
import TopDeals from'./TopDeals/TopDeals'
import SponsoredProducts from './SponsoredProducts/SponsoredProducts'
import FeaturedCategories from './Categories/FeaturedCategories'
export default function HomePage() {
  return (
    <>
    <div className="Home">
      <Features></Features>
      <PopularItems></PopularItems>
      <TopDeals></TopDeals>
      <SponsoredProducts></SponsoredProducts>
      <FeaturedCategories></FeaturedCategories>
    </div>
    </>
    
  )
}
