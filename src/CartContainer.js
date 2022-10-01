import React from 'react'
import CartItems from './CartItems'
import { useGlobalcontext } from './context'

const CartContainer = () => {
  const{data,total,clearCart}=useGlobalcontext()

  if(data.length === 0){
    return(
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your cloths style sample</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      <header>
      <h2>your cloths styles sample</h2>
      
      </header>
      <div>
        {data.map((item)=>{
          return<CartItems key={item.id} {...item}/>
        })}
      </div>
      <footer>
        <hr/>
        <div className='cart-total'>
          <h4>
          total<span>${total}</span>
          </h4>
         
        </div>
        <button className='btn clear-btn' onClick={clearCart}>clear cart</button>
      </footer>
     
    </section>
  )
}

export default CartContainer