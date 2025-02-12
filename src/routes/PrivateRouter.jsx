import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRouter = (props = {}) => {
    const {children} = props || {} ;
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <div className="flex items-center justify-center min-h-screen"><span className="loading loading-ring loading-lg"></span></div>;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/auth/login" />;
};

export default PrivateRouter;
