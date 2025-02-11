import FindUs from "../FindUs";
import SocialLogin from "../SocialLogin";


const RightNavbar = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="socialLogin">
                <SocialLogin></SocialLogin>
            </div>
            <div className="findus">
                <FindUs></FindUs>
            </div>
        </div>
    );
};

export default RightNavbar;