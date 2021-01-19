import React from 'react'
import { useSelector } from "react-redux";
import NavBar from './components/NavBar.jsx'
import PrivateRoutes from './Routes/privateRoutes.js'
import PublicRoutes from './Routes/publicRoutes.js'

const App = () => {

  const userLog = useSelector((state) => state.myuser)
  const isAdmin = userLog.userLog.admin

  return (
    <div>
      <NavBar />
      <PrivateRoutes isAdmin={isAdmin} />
      <PublicRoutes />
    </div>
  )
}

export default App
