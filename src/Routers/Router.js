import { createBrowserRouter } from "react-router-dom";
import Main from '../Layouts/Main'
import AllCourse from "../Pages/Courses/allCourse/AllCourse";
import Cheakout from "../Pages/Courses/CheakOut/ChackOut";
import Course_Details from "../Pages/Courses/Course_Details/Course_Details";
import Home from '../Pages/components/Home'
import Registrar from "../Pages/Login_Registar/Registrar";
import Login from "../Pages/Login_Registar/Login";
import ErrorPages from "../Pages/ErrorPagess/ErrorPages";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Projects from "../Pages/Project/Projects";
import Contact from "../Pages/Contact/Contact";
import Pdf from "../PDF/Pdf";
import ServiceCetagory from "../Pages/Cetagory/ServiceCetagory";
import About from "../Pages/About/About";
import ExtraProjectDetails from "../Pages/components/Home page component/ExtraProjectDetails";
import Blocks from '../Pages/Block/Blocks'
import ResumeMain from "../Pages/Resume/ResumeMain";
import Marn from "../PDF/Marn";
import Front from "../PDF/Front";
import Backend from "../PDF/Backend";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/pdf',
                element: <ResumeMain />
            },
            {
                path: '/pdf/mern',
                element: <Marn />
            },
            {
                path: '/pdf/front',
                element: <Front />
            },
            {
                path: '/pdf/backend',
                element: <Backend />
            },
            {
                path: '/cetagors',
                element: <ServiceCetagory />
            },
            {
                path: '/development/:id',
                element: <AllCourse></AllCourse>,
                loader: ({ params }) => fetch(`https://web-technology-server-site.vercel.app/development/${params?.id}`)
            },

            {
                path: '/details/:id',
                element: <Course_Details></Course_Details>,
                loader: ({ params }) => fetch(`https://web-technology-server-site.vercel.app/details/${params.id}`)

            },
            {
                path: '/project',
                element: <Projects></Projects>
            },
            {
                path: '/simple-project/:id',
                element: <ExtraProjectDetails />,
                loader: ({ params }) => fetch(`https://web-technology-server-site.vercel.app/simple-project/${params?.id}`)
            },

            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/block',
                element: <Blocks />
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
                path: '/course_details',
                element: <Course_Details></Course_Details>
            },
            {
                path: '/chackout/:id',
                element: (
                    <PrivetRoute>
                        <Cheakout></Cheakout>
                    </PrivetRoute>
                ),
                loader: ({ params }) => fetch(`https://web-technology-server-site.vercel.app/course/${params.id}`)

            }

        ]
    }

])

