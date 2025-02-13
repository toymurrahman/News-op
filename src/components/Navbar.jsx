import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
 const {user, logOut} = useContext(AuthContext);


 
  return (
    <div className="flex justify-between items-center">
      <div> {user?.displayName}   </div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="login">
        <div className=" flex gap-2 items-center">
          {
            user && user?.email ? (     
                <img className="w-10 rounded-full " src={user?.photoURL} alt="" />   
            ) : (
              <div> </div>
            )
          }
          
          
         {
          user && user?.email ? (
            <button onClick={logOut} className="btn btn-neutral">
              Logout
            </button>
          ) : (
            <Link to='/auth/login' className="btn btn-neutral">Login</Link>
          )
         }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
