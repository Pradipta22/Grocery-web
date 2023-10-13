import React from 'react'
import '../tabcontentbox/maincontainer.css'
import FrozenData from './frozenData'
import TabContent from '../tabcontentbox/tabcontent'

const Frozen = () => {
  const FrozenItems = FrozenData.map((fooditems,index) =>(
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
     <div className="mainContainer">{FrozenItems}</div>
    </>
  )
}

export default Frozen
