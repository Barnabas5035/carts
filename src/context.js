import React, {useContext, useEffect, useReducer} from 'react'
import carts from "./Data"
import Reducer  from './Reducer'
const PersonContext =React.createContext()
const initialState ={
  loading:false,
  data:carts,
  total:0,
  amount:0,
  
}
const AppProvider = ({children}) => {
  const [state,dispatch]= useReducer(Reducer, initialState)

  const clearCart=()=>{
    dispatch({type:"CLEAR_CART"})
  }
  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
  }
  const increase =(id)=>{
    dispatch({type:"INCREASE",payload:id})
  }
  
  const decrease =(id)=>{
    dispatch({type:"DECREASE",payload:id})
  }
  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
  }
  useEffect(()=>{
    dispatch({type:"GET_TOTALS"})
  },[state.data])
  
  return (
    <PersonContext.Provider value={{
      ...state,
      
      clearCart,
      remove,
      increase,
      decrease,
      toggleAmount,

    

    }}>
    {children}
    </PersonContext.Provider>
  )
}
export const useGlobalcontext=()=>{
    return useContext(PersonContext)
}

export {PersonContext,AppProvider } 