import React from 'react'
import '../tabcontentbox/maincontainer.css'
import FruitsData from './fruitsData'
import TabContent from '../tabcontentbox/tabcontent'

const Fruits = () => {
  const FruitItems = FruitsData.map((fooditems,index) =>(
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
     <div className="mainContainer">{FruitItems}</div>
    </>
  )
}

export default Fruits
