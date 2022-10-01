const Reducer=(state,action)=>{

    if(action.type ==="CLEAR_CART"){
        return{...state,data:[]}
    }
    if(action.type ==="REMOVE"){
        return{
            ...state,data:state.data.filter((carts)=>carts.id!==action.payload), 
        }
    }
    if(action.type ==="INCREASE"){
        let tempCart = state.data.map((carts)=>{
            if(carts.id === action.payload){
                return{ ...carts,amount:carts.amount + 1} 
            }
            return carts
        })
        return{ ...state,data:tempCart}
    }
    if (action.type === 'DECREASE') {
        let tempCart = state.data
          .map((carts) => {
            if (carts.id === action.payload) {
              return { ...carts, amount: carts.amount - 1 }
            }
            return carts
          })
          .filter((carts) => carts.amount !== 0)
        return { ...state, data: tempCart }
      }
      if (action.type === 'TOGGLE_AMOUNT') {
        let tempCart = state.data
          .map((carts) => {
            if (carts.id === action.payload.id) {
              if (action.payload.type === 'inc') {
                return { ...carts, amount: carts.amount + 1 }
              }
              if (action.payload.type === 'dec') {
                return { ...carts, amount: carts.amount - 1 }
              }
            }
            return carts
          })
          .filter((carts) => carts.amount !== 0)
        return { ...state, data: tempCart }
      }

      if (action.type === 'GET_TOTALS') {
        let { total, amount } = state.data.reduce(
          (cartTotal, carts) => {
            const { price, amount } = carts
            const itemTotal = price * amount
    
            cartTotal.total += itemTotal
            cartTotal.amount += amount
            return cartTotal
          },
          {
            total: 0,
            amount: 0,
          }
        )
        total = parseFloat(total.toFixed(2))
    
        return { ...state, total, amount }
      }
   
}
export default Reducer