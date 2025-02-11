import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import RightNavbar from "../components/layout-components/RightNavbar";
import Navbar from "../components/Navbar";


const HomeLayout = () => {
    return (
        <div className="font-poppins">
           <div >
            <header className="flex flex-col items-center justify-center gap-4">
                 <Header/>
            </header>

            <section className="w-11/12 mx-auto mt-4">
                <LatestNews/>
            </section>

            <section className="w-11/12 mx-auto py-2">
                <Navbar/>
            </section>

            <main className="grid md:grid-cols-12 w-11/12 mx-auto pt-4 gap-3"> 
                <aside className="col-span-3"><LeftNavbar/></aside>
                <section className="col-span-6"> <Outlet/> </section>
                <aside className="col-span-3"> <RightNavbar/> </aside>
            </main>
           </div>
           
        </div>
    );
};

export default HomeLayout;