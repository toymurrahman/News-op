import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Login With</h2>
      <div className="flex flex-col gap-2">
        <button className="btn btn-social bg-white"> <FcGoogle /> Google</button>
        <button className="btn btn-social bg-white"> <FaGithub /> Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;
