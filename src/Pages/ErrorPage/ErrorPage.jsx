import { Link } from 'react-router-dom';
import error from '../../assets/errorpage/errorpage.webp'
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div>
            <img src={error} alt="" />
            <div className='flex text-5xl font-bold text-center gap-4 '>
            <FaArrowLeft></FaArrowLeft>
            <button className='bg-pink-200 px-4 p-2 rounded-lg' > <Link to='/'>Back To Home</Link></button>
            
            </div>
        </div>
    );
};

export default ErrorPage;