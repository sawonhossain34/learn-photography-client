import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "./Main/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PopularClasses from "../Pages/Home/PopularClasses/PopularClasses";
import Login from "../Pages/Login/Login";
import SignUP from "../Pages/SignUp/SignUP";

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
        path: '/classes',
        element: <PopularClasses></PopularClasses>
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
]);