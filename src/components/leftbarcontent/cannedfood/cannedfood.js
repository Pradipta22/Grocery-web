import React from 'react'
import '../tabcontentbox/maincontainer.css'
import CannedData from './cannedData'
import TabContent from '../tabcontentbox/tabcontent'

const Cannedfood = () => {
  const CannedItems = CannedData.map((fooditems,index) =>(
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
      <div className="mainContainer">{CannedItems}</div>
    </>
  )
}

export default Cannedfood
