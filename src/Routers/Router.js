import { createBrowserRouter } from "react-router-dom";
import Main from '../Layouts/Main'
import AllCourse from "../Pages/Courses/allCourse/AllCourse";
import Cheakout from "../Pages/Courses/Cheakout/Cheakout";
import Course_Details from "../Pages/Courses/Course_Details/Course_Details";
import Home from '../Pages/components/Home'
import About from "../Pages/components/About";
import Registrar from "../Pages/Login_Registar/Registrar";
import Login from "../Pages/Login_Registar/Login";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <AllCourse></AllCourse>
            },
            {
                path: '/course_details',
                element: <Course_Details></Course_Details>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registrar></Registrar>
            },
            {
                path: '/servise',
                element: <Course_Details></Course_Details>
            },
            {
                path: '/course_details',
                element: <Course_Details></Course_Details>
            },
            {
                path: '/chackout',
                element: <Cheakout></Cheakout>
            }
        ]
    }
])

