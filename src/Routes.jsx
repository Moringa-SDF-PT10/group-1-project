import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import RestaurantLists from "./components/RestaurantList";
import RestaurantDetails from './components/RestaurantDetails';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import NavBar1 from "./components/NavBar1";
import ErrorPage from "./components/ErrorPage";

const routes = [

  {
    path: "/",
    element: (
      <>
        <NavBar1 />
        <Home />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/Restaurants",
    element: (
        <>
    <NavBar1/>
    <RestaurantLists />,
    </>
    ),
  },
  {
    path: "/Restaurants/:id",
    element: (
        <>
    <NavBar1/>
    <RestaurantDetails />,
    </>
    ),
  },
  {
    path: "/Login",
    element: (
    <>
    <NavBar1/>
    <Login />
    </>
    ),

  },
  {
    path: "/Signup",
    element: (
    <>
    <NavBar1/>
    <Signup />
    </>),
  },
  {
    path: "/Profile",
    element: (
        <>
    <NavBar1/>
    <Profile />
    </>),
  },
];

export default routes;
