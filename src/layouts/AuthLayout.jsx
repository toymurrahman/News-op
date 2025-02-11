import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const AuthLayout = () => {
    return (
       <div className="bg-gray-100">
         <div className="font-poppins py-4 w-11/12 mx-auto ">
            <Navbar/>
            <Outlet/>
        </div>
       </div>
    );
};

export default AuthLayout;