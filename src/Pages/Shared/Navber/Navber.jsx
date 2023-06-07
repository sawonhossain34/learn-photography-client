import { Link } from "react-router-dom";


const Navber = () => {

    const navLinkOptions = <>
        <li><Link>Home</Link></li>
        <li><Link>Instructors</Link></li>
        <li><Link>Classes</Link></li>
        <li><Link>Dashboard</Link></li>
    </>
    return (
        <>
            <div className="navbar fixed opacity-50 max-w-screen-xl m-auto z-10 bg-pink-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-secondary lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-pink-100 rounded-box w-52 font-bold text-black">
                            {navLinkOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost font-bold normal-case text-pink-400 text-3xl">Learn Photography</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold text-black">
                        {navLinkOptions}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <button className="bg-pink-400 px-8 font-bold  rounded-lg"><Link className="text-white">Login</Link></button>
                </div>
            </div>
        </>
    );
};

export default Navber;