import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find us</h2>
      <div className="join flex join-vertical *:bg-white">
        <button className="btn join-item "> <FaFacebook /> Facebook</button>
        <button className="btn join-item "> <FaTwitter /> Twitter</button>
        <button className="btn join-item"> <IoLogoInstagram /> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
