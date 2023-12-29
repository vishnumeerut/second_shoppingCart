
import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import MainRoutes from './Routes/MainRoutes'
import UserContext from './context/UserContext'
import CartContext from './context/CartContext'

function App() {

  const [user, setUser] = useState(null)
  const [cart, setCart] = useState({products:[]})
  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
      <CartContext.Provider value={{cart, setCart}}>
        <Header />
        <MainRoutes />
        </CartContext.Provider>
      </UserContext.Provider>

    </>
    
  )
}

export default App
