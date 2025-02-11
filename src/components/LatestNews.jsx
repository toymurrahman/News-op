
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="bg-gray-100 p-4 flex gap-2 items-center">
            <p className="bg-red-600 text-white rounded-sm px-1 py-1" >Latest</p>

          <Marquee speed={100}  className="flex gap-10">
                 <Link to='/news'> North Korea fires missiles; South Korea responds, escalating tensions on the Korean Peninsula. </Link>  
                <Link to='/news'> Bangladesh Dhaka ranks fifth in global air pollution with an AQI score of 200. </Link>
                <Link to='/news'> Legendary Indian tabla maestro Ustad Zakir Hussain passes away at 73 in San Francisco. </Link>
                <Link to='/news'> Legendary Indian tabla maestro Ustad Zakir Hussain passes away at 73 in San Francisco .</Link>
          </Marquee>
           
        </div>
    );
};

export default LatestNews;