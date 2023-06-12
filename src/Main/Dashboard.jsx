import { FaCalendar, FaClipboardList, FaHome, FaMoneyBill } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";



const Dashboard = () => {


    const [isAdmin] = UseAdmin();
    
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
                            <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                            <li><NavLink to='/'>Instructor</NavLink></li>
                            <li><NavLink to='/allclass'><FaClipboardList></FaClipboardList>classes</NavLink></li>
                            <div className="divider divider-horizontal"></div>
                            {
                                isAdmin ?
                                    <>
                                        <li><NavLink to='/dashboard/home'><FaHome></FaHome>Admin Home</NavLink></li>
                                        <li><NavLink to='/dashboard/myclass'><FaClipboardList></FaClipboardList> Manage Class</NavLink></li>
                                        <li><NavLink to='/dashboard/addclass'><FaMoneyBill></FaMoneyBill>Add Class</NavLink></li>
                                        <li><NavLink to='/dashboard/studentclass'><FaClipboardList></FaClipboardList> student Class</NavLink></li>
                                        <li><NavLink to='/dashboard/allusers'><FaCalendar></FaCalendar>All Users</NavLink></li>
                                    </>
                                    :
                                    <>
                                        <li><NavLink to='/dashboard/home'><FaHome></FaHome>Student Home</NavLink></li>
                                        <li><NavLink to='/dashboard/studentclass'><FaClipboardList></FaClipboardList> student Class</NavLink></li>
                                        <li><NavLink to='/dashboard/history'><FaMoneyBill></FaMoneyBill>Payment History</NavLink></li>
                                        <li><NavLink to='/dashboard/reservations'><FaCalendar></FaCalendar>Reservations</NavLink></li>
                                    </>
                            }
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-pink-200">
                    {/* Sidebar content here */}
                    {
                        isAdmin ?
                            <>
                                <li><NavLink to='dashboard/home'><FaHome></FaHome>Admin Home</NavLink></li>
                                <li><NavLink to='dashboard/myclass'><FaClipboardList></FaClipboardList> Manage Class</NavLink></li>
                                <li><NavLink to='dashboard/history'><FaMoneyBill></FaMoneyBill>Add Class</NavLink></li>
                                <li><NavLink to='dashboard/reservations'><FaCalendar></FaCalendar>Reservations</NavLink></li>
                                <li><NavLink to='/dashboard/allusers'><FaCalendar></FaCalendar>All Users</NavLink></li>
                            </> :
                            <>
                                <li><NavLink to='dashboard/home'><FaHome></FaHome>Student Home</NavLink></li>
                                <li><NavLink to='dashboard/myclass'><FaClipboardList></FaClipboardList> My Class</NavLink></li>
                                <li><NavLink to='dashboard/history'><FaMoneyBill></FaMoneyBill>Payment History</NavLink></li>
                                <li><NavLink to='dashboard/reservations'><FaCalendar></FaCalendar>Reservations</NavLink></li>
                            </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/'>Instructor</NavLink></li>
                    <li><NavLink to='/allclass'><FaClipboardList></FaClipboardList>classes</NavLink></li>


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;