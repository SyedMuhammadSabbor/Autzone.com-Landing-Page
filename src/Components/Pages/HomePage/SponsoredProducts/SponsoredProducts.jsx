import React from 'react'
import Crouse from './Crouse.jsx'
import Heading from '../Heading.jsx'
import Card from './Card.jsx'
import second from "../../../../images/download.avif"
import first from "../../../../images/download.avif"
import exculs from "../../../../images/exclusively.png"
import ImageSet from '../ImagesSet.jsx'
export default function SponsoredProducts() {
  const Det = [
    {
      rates: "4.8",
      Values: "(1047)",
      picture: second,
      prices: "$276.99",
      information: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rates: "4.8",
      Values: "(1047)",
      picture: first,
      prices: "27",
      pents :"99",
      information: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
     },
      {
      rates: "4.8",
      Values: "(1047)",
      picture: first,
      prices: "58",
      pents :"99",
      information: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rates: "4.8",
      Values: "(1047)",
      picture: first,
      prices: "$266.99",
      information: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rates: "4.8",
      Values: "(1047)",
      picture: first,
      prices: "$266.99",
      information: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rates: "4.8",
      Values: "(1047)",
      picture: first,
      prices: "$266.99",
      information: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rates: "4.8",
      Values: "(1047)",
      picture: first,
      prices: "$266.99",
      information: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rates: "4.8",
      Values: "(1047)",
      picture: first,
      prices: "$266.99",
      information: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rates: "4.8",
      Values: "(1047)",
      picture: first,
      prices: "$266.99",
      information: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rates: "4.8",
      Values: "(1047)",
      picture: first,
      prices: "$266.99",
      information: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rates: "4.8",
      Values: "(1047)",
      picture: first,
      prices: "$266.99",
      information: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rates: "4.8",
      Values: "(1047)",
      picture: first,
      prices: "$266.99",
      information: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rates: "4.8",
      Values: "(1047)",
      picture: first,
      prices: "$266.99",
      information: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rates: "4.8",
      Values: "(1047)",
      picture: first,
      prices: "$266.99",
      information: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rates: "4.8",
      Values: "(1047)",
      picture: first,
      prices: "$266.99",
      information: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rates: "4.8",
      Values: "(1047)",
      picture: first,
      prices: "$266.99",
      information: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rates: "4.8",
      Values: "(1047)",
      picture: first,
      prices: "66",
      pents : "99",
      information: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
    {
      rates: "4.8",
      Valuess: "(1047)",
      picture: first,
      prices: "66",
      pents : "99",
      information: " Duralast Platinum AGM Battery BCI Group Size 48 760 CCA H6-AGM",
    },
  ]
  return (
    <>
    <div>
    <Heading pov="SPONSORED PRODUCTS" />
    </div>
        <div>
          <Crouse  children =
          {Det.map((item, index) => (
          <Card
            key={index}
            rates={item.rates}
            prices={item.prices}
            Values={item.Values}
            pic={item.picture}
            Information={item.information}
            pense ={item.pents}
          />
        ))}
        />
        </div>
        <ImageSet pic={exculs}
        para="Sponsored"/>
    </>
  )
}
