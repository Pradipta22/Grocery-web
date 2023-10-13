import React from 'react'
import '../tabcontentbox/maincontainer.css'
import BakeryData from './bakerydata'
import TabContent from '../tabcontentbox/tabcontent'

const Bakery = () => {

  const bakeryItems = BakeryData.map((fooditems, index) => (
    <TabContent
    key= {index}
    Imgurl= {fooditems.Imgurl}
    Name = {fooditems.Name}
    Price = {fooditems.Price}
    Quantity = {fooditems.Quantity}
    />
  ))

  return (
    <>
      <div className="mainContainer">{bakeryItems}</div>
    </>
  )
}

export default Bakery
