import React from 'react'
import './Topdeals.css'
import avail1 from '../../../../images/autolite-d.avif';
import avail2 from '../../../../images/wipers-d.avif';
import avail3 from '../../../../images/sylvania-d.avif'
import ClickForDetail from '../ClickForDetail';
import Heading from '../Heading';
export default function TopDeals() {
   const avail = [avail1 , avail2 , avail3]
  return (
    <>
      <Heading pov="TOP DEALS" />
      <div className="deals">
        {avail.map((item, index) => (
          <ClickForDetail key={index} image={item} showShadow={true} />
        ))}
      </div>
    </>
  );
}
