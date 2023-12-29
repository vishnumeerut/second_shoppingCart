
import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import MainRoutes from './Routes/MainRoutes'
import UserContext from './context/UserContext'

function App() {

  const [user, setUser] = useState(null)
  return (
    <>
      <UserContext.Provider value={{user, setUser}}>

      <Header />
      <MainRoutes />
      </UserContext.Provider>

    </>
    
  )
}

export default App
