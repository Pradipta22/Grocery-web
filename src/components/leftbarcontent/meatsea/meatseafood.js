import React from 'react'
import '../tabcontentbox/maincontainer.css'
import MeatseaData from './meatSeaData'
import TabContent from '../tabcontentbox/tabcontent'

const MeatseaFood = () => {
  const MeatseaItems = MeatseaData.map((fooditems,index) =>(
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
    <div className="mainContainer">{MeatseaItems}</div>
   </>
  )
}

export default MeatseaFood
