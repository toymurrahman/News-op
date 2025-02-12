import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { loginUser,setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const naavigate = useNavigate();
 

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
   

    loginUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
       
        setUser(user);
        naavigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        
        setError(err.message); 
      console.error("Login Error:", err.code, err.message);
        
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full max-w-lg p-10 shrink-0 shadow-2xl   ">
        <form onSubmit={handleLogin} className="card-body">
          <h1 className="font-semibold text-2xl text-center mb-6">
            Login your account
          </h1>
          <hr />
          <div className="form-control mt-6">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Login</button>
          </div>
          <div className="text-center font-semibold text-gray-500 pt-4">
            <p>
              Dont’t Have An Account ?{" "}
              <Link
                to="/auth/register"
                className="bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] text-transparent bg-clip-text "
              >
                Register
              </Link>{" "}
            </p>
          </div>
          {error && <p className="text-red-500 text-sm text-center">ERROR: {error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
