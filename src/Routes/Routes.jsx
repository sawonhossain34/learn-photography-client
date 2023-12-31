import {
  createBrowserRouter,
} from "react-router-dom";
// import Main from "./Main/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
// import PopularClasses from "../Pages/Home/PopularClasses/PopularClasses";
import Login from "../Pages/Login/Login";
import SignUP from "../Pages/SignUp/SignUP";
import AllClass from "../Pages/Home/Home/AllClass/AllClass";
import Main from "../Main/Main";
import Dashboard from "../Main/Dashboard";
import StudentClass from "../Pages/Dashboard/StudentClass/StudentClass";
import ProtectedRoute from "./ProtectedRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import AdminRoute from "./AdminRoute";
import PopularInstructor from "../Pages/Home/Home/AllClass/PopularInstructor/PopularInstructor";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allclass',
        element: <AllClass></AllClass>
      },
      {
        path: '/allinstructor',
        element: <PopularInstructor></PopularInstructor>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUP></SignUP>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute><Dashboard></Dashboard></ProtectedRoute>,
    children: [
      {
        path: 'studentclass',
        element: <StudentClass></StudentClass>
      },
      {
        path: 'allusers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'addclass',
        element: <AdminRoute><AddClass></AddClass></AdminRoute>
      }
    ]
  }
]);