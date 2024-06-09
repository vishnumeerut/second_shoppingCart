
import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import MainRoutes from './Routes/MainRoutes'
import UserContext from './context/UserContext'
import CartContext from './context/CartContext'
import axiosinstance from './Config/AxiosInstance'
import { useCookies } from 'react-cookie'
import { jwtDecode } from 'jwt-decode'
import { fetchUserCart } from './helper/fetchUserCartHelper'
import Footer from './Components/Footer/Footer'
import  { Toaster } from 'react-hot-toast';
import SearchContext from './context/SearchContext'

function App() {

  const [user, setUser] = useState(null)
  const [cart, setCart] = useState({products:[]})
  const [token, setToken] = useCookies(["jwt-token"])
  const [inputText, setInputText] = useState("")

  async function accesstoken() {
    axiosinstance.get("accesstoken", {withCredentials:true})
    .then((response) => {
      setToken("jwt-token", response.data.token, {httpOnly: true})
      const decodedToken = jwtDecode(response.data.token);
      setUser({username: decodedToken.user, id: decodedToken.id})
    }
    )
  }

  async function load() {
    if(!user) {
      accesstoken()
    }
    if(user) {
      await fetchUserCart(user.id, setCart)
    }
  }
  useEffect(() => {
   
    load()
    
  }, [user])
  return (
    <>
      <UserContext.Provider value={{user, setUser}}>
      <CartContext.Provider value={{cart, setCart}}>
        <SearchContext.Provider value={{inputText, setInputText}}>
          <Header />
          <MainRoutes />
          <Footer />
          <Toaster />
        </SearchContext.Provider>
        </CartContext.Provider>
      </UserContext.Provider>

    </>
    
  )
}

export default App
