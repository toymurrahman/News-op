import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { AuthContext } from './../provider/AuthProvider';

const SocialLogin = () => {
  const { googleLogin, facebookLogin, setUser } = useContext(AuthContext);

  const handleGooglelogin = () => { 
    googleLogin()
    .then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
  }) .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email
    console.log(error.message);
    alert(errorCode, errorMessage, email);
  });
  }
  const handleFacebooklogin = () => {
    facebookLogin()
    .then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
  }) .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email
    console.log(error.message);
    alert(errorCode, errorMessage, email);
  });
  }
  return (
    <div>
      <h2 className="font-semibold mb-3">Login With</h2>
      <div className="flex flex-col gap-2">
        <button onClick={handleGooglelogin} className="btn btn-social bg-white"> <FcGoogle /> Google</button>
        <button className="btn btn-social bg-white"> <FaGithub /> Github</button>

        <button  onClick={handleFacebooklogin} className="btn btn-social bg-white"> <FaFacebook /> Facebook</button>
      </div>
    </div>
  );
};

export default SocialLogin;
