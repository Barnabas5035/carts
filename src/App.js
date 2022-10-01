import React from 'react'
import CartContainer from './CartContainer';
import Navbar from './Navbar';
import context from './context';
import { useGlobalcontext } from './context';
const App = () => {
  const{loading}=useGlobalcontext()
  if(loading){
    return(
      <div className='loading'>
        <h1>loading......</h1>
      </div>
    )
  }
  return (
    <div>
      <Navbar/>
    <CartContainer/>
    </div>
  )
}

export default App
