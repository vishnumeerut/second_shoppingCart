
import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import MainRoutes from './Routes/MainRoutes'
import UserContext from './context/UserContext'
import CartContext from './context/CartContext'
import axiosinstance from './Config/AxiosInstance'
import { useCookies } from 'react-cookie'
import { jwtDecode } from 'jwt-decode'

function App() {

  const [user, setUser] = useState(null)
  const [cart, setCart] = useState({products:[]})
  const [token, setToken] = useCookies(["jwt-token"])

  function accesstoken() {
    axiosinstance.get("accesstoken", {withCredentials:true})
    .then((response) => {
      setToken("jwt-token", response.data.token, {httpOnly: true})
      const decodedToken = jwtDecode(response.data.token);
      setUser({username: decodedToken.user, id: decodedToken.id})
    }
    )
  }

  useEffect(() => {
   
    accesstoken()
    
  }, [])
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
