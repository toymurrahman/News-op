import moment from 'moment';
import logo from '../assets/logo4.png';

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-8'>
            <div className="logo">
                <img className='w-[380px]' src={logo} alt="" />
            </div>
            <h1 className='text-gray-400'> Journalism Without Fear or Favour </h1>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;