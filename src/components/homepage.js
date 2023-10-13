import React,{useState} from 'react'

import NavBar from './navbar/navbar'
import VerticalTabs from './verticaltab/verticaltabmenu'

const Homepage = () => {
  const [show,setShow] = useState(true)
  const [cart,setCart] = useState([]);
  
  return (
    <>
    <NavBar size={cart.length}/>
    <VerticalTabs />
    
    </>
  )
}

export default Homepage
