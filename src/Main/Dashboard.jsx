import { FaCalendar, FaClipboardList, FaHome, FaMoneyBill } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";



const Dashboard = () => {
    const studentDash = <>
        <li><Link><FaHome></FaHome>Student Home</Link></li>
        <li><Link><FaClipboardList></FaClipboardList> Class</Link></li>
        <li><Link><FaMoneyBill></FaMoneyBill>Payment History</Link></li>
        <li><Link><FaCalendar></FaCalendar>Reservations</Link></li>
    </>
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}

                <div className="w-full navbar bg-pink-200">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 font-bold text-pink-500 text-3xl px-2 mx-2">Learn Photography</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}

                            {studentDash}
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                Content
                <Outlet></Outlet>
                
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-pink-200">
                    {/* Sidebar content here */}
                    {studentDash}
                    <div className="divider"></div>

                    {/* <li><Link><FaHome></FaHome>Student Home</Link></li>
                    <li><a>Sidebar Item 2</a></li> */}

                    <li><Link to='/'><FaHome></FaHome>Home</Link></li>
                    <li><Link to='/allclass'><FaClipboardList></FaClipboardList>Classes</Link></li>


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;