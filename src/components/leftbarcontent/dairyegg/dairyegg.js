import React from 'react'
import '../tabcontentbox/maincontainer.css'
import DairyData from './dairydata'
import TabContent from '../tabcontentbox/tabcontent'

const Dairy = () => {
 
  const dairyItems = DairyData.map((fooditems,index) =>(
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
     <div className="mainContainer">{dairyItems}</div>
    </>
  )
}

export default Dairy
