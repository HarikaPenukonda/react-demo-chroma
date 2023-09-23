import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
export default function App(){
        const Layout = () => {
            return(
            <div className="main">
            <Navbar/>
            <div className='container'>
            <div className='menu-container'>
            {/* <Menu/> */}
            </div>
            <div className='content-container'>
            <Outlet/>
            </div>
        </div>
        <Footer/>
        </div> 
    )
}


const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    }
])

return <RouterProvider router={router} />
}