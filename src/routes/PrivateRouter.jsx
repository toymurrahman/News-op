import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = (props = {}) => {
    const {children} = props || {} ;
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();   
  
  if (loading) {
    return <div className="flex items-center justify-center min-h-screen"><span className="loading loading-ring loading-lg"></span></div>;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login" />;
};

export default PrivateRouter;
