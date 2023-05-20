import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/MainComponents/Home";
import Blog from "../components/MainComponents/Blog";
import AllToy from "../components/MainComponents/AllToy";
import MyToy from "../components/MainComponents/MyToy";
import AddToy from "../components/MainComponents/AddToy";
import SignIn from "../components/MainComponents/SignIn";
import SignUp from "../components/MainComponents/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ToyDetail from "../components/MainComponents/ToyDetail";
import ToyUpdate from "../components/MainComponents/ToyUpdate";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/allToy",
                element: <AllToy></AllToy>
            },
            {
                path: "/myToy",
                element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
            },
            {
                path: "/addToy",
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: "/toy/:id",
                element: <PrivateRoute><ToyDetail></ToyDetail></PrivateRoute>
            },
            {
                path: "/updateToy/:id",
                element: <ToyUpdate></ToyUpdate>
            }
            
            
        ]
    },  
    {
        path: "/signIn",
        element: <SignIn></SignIn> 
    },
    {
        path: "/signUp",
        element: <SignUp></SignUp>
    }
   
])

export default router;