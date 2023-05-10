import { Navigate, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/DashBoard";
import { RequireAuth } from "../contexts/auth/Require";


export const routerDashboard = createBrowserRouter([
  {
    element: <RequireAuth><Dashboard /></RequireAuth>,
    children: [
      {
        path: "/",
        element: <Navigate to="/realizar-checkin"/>
      },

      {
        path: "/realizar-checkin",

      },

      {
        path: "/checkins-realizados",
        
      },

      {
        path: "/cadastra-cliente",
        
      },

      {
        path: "/todos-clientes",
        
      },
    ]
  }])
