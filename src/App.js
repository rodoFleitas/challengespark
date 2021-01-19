import React from 'react'
import { useSelector } from "react-redux";
import NavBar from './components/NavBar.jsx'
import PrivateRoutes from './Routes/privateRoutes.js'
import PublicRoutes from './Routes/publicRoutes.js'

const App = () => {

  const userLog = useSelector((state) => state.myuser)
  const isAuth = userLog.userLog.id?  true : false
  const isAdmin = userLog.userLog.admin

  return (
    <div>
      <NavBar isAuth={isAuth} />
      <PrivateRoutes isAdmin={isAdmin} />
      <PublicRoutes />
    </div>
  )
}

export default App
