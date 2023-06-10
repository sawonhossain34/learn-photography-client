import summer from '../../../assets/exta/exta.webp';
import bg from '../../../assets/exta/exta-bg.jpg';

const SummerOut = () => {
    const extraBg = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    return (
        <div className="hero min-h-screen mb-10 rounded  bg-base-200" style={extraBg}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-1/2'>
                    <img src={summer} className="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2 text-center mr-10'>
                    <h1 className="text-5xl pb-8 font-bold"><span className='text-right text-pink-600 font-bold'>It is</span><br /> <span className='text-teal-600 text-left font-extrabold'>summer</span><br /> Time</h1>
                    <h2 className='font-bold'>Welcome to Summer!</h2>
                    <p className='font-bold'>Enjoy the sun, sand, and waves</p>
                    <p className='font-bold'>Discover new adventures and make lasting memories.</p>
                </div>
            </div>
        </div>
    );
};

export default SummerOut;