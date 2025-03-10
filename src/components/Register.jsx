import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const photo = formData.get("photo");
    const password = formData.get("password");

  

    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        updateUser({
          displayName: name,
          photoURL: photo,
        })
        .then(() => {
          navigate("/");
        }) .catch((error) => {
          setError(error.code, error.message);
        });
      })
      .catch((error) => {
       
        setError(error.code, error.message);
       
      });

   
  };
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="card bg-base-100 w-full max-w-lg p-10 shrink-0 shadow-2xl   ">
        <form onSubmit={handleSubmit} className="card-body">
          <h1 className="font-semibold text-2xl text-center mb-6">
            Register your account
          </h1>
          <hr />
          <div className="form-control pt-6">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo-url"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Login</button>
          </div>
          <div className="text-center font-semibold text-gray-500 pt-4">
            <p>
              Do You Have An Account ?{" "}
              <Link
                to="/auth/login"
                className="bg-gradient-to-r from-[#FF8C47] to-[#F75B5F] text-transparent bg-clip-text "
              >
                Login
              </Link>{" "}
            </p>
          </div>
          {error && <p className="text-red-500 text-sm text-center">ERROR: {error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
