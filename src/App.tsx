import { useState, useEffect, useContext } from "react"

import { RouterProvider, useNavigate } from "react-router-dom"
import { routerDashboard,  } from "./router/Router"

import { AuthContext } from "./contexts/auth/AuthContext"

function App() {

  const  auth = useContext(AuthContext)
  
  return (
    <RouterProvider router={routerDashboard} />
  )

}

export default App
