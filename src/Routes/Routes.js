import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import TodoFrom from "../Pages/TodoFrom/TodoFrom";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import RequireAuth from "../Pages/RequireAuth/RequireAuth";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element:<RequireAuth><Home></Home></RequireAuth> 
            },
            {
                path: '/home',
                element:<RequireAuth><Home></Home></RequireAuth> 
            },
            {
                path: '/todo',
                element:<RequireAuth><TodoFrom></TodoFrom></RequireAuth>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
           
        ]
    },

])

export default router;