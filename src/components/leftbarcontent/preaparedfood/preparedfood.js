import React from 'react'
import '../tabcontentbox/maincontainer.css'
import PreparedFoodData from './preparedFooddata'
import TabContent from '../tabcontentbox/tabcontent'

const Preparedfood = () => {
  const preparedItems = PreparedFoodData.map((fooditems,index) =>(
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
   <div className="mainContainer">{preparedItems}</div>
    </>
  )
}

export default Preparedfood
