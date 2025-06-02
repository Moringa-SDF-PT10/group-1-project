import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import RestaurantLists from "./components/RestaurantList";
import RestaurantDetails from './components/RestaurantDetails';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import NavBar1 from "./components/NavBar1";
import Favorites from "./components/Favorites";
import ContactHelp from "./components/ContactHelp";
import Trending from "./components/Trending";
import FoodGallery from "./components/FoodGallery";
import Reservation from "./components/Reservation";
import ErrorPage from "./components/ErrorPage";
import ProtectedRoute from "./ProtectedRoute";

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
       <ProtectedRoute>
        <>
    <NavBar1/>
    <RestaurantLists />,
    </>
    </ProtectedRoute>
    ),
     errorElement: <ErrorPage />,
  },
  {
    path: "/Restaurants/:id",
    element: (
        <>
    <NavBar1/>
    <RestaurantDetails />,
    </>
    ),
     errorElement: <ErrorPage />,
  },
  {
    path: "/Login",
    element: (
    <>
    <NavBar1/>
    <Login />
    </>
    ),
     errorElement: <ErrorPage />,

  },
  {
    path: "/Signup",
    element: (
    <>
    <NavBar1/>
    <Signup />
    </>
    ),
     errorElement: <ErrorPage />,
  },
  {
    path: "/Profile",
    element: (
       <ProtectedRoute>
        <>
    <NavBar1/>
    <Profile />
    </>
      </ProtectedRoute>
    ),
     errorElement: <ErrorPage />,
  },
  {
    path: "/trending",
    element: (
       <ProtectedRoute>
        <>
    <NavBar1/>
    <Trending/>
    </>
      </ProtectedRoute>
    ),
     errorElement: <ErrorPage />,
  },
  {
  path: "/favorites",
  element: (
    <ProtectedRoute>
    <>
      <NavBar1 />
      <Favorites />
    </>
    </ProtectedRoute>
  ),
   errorElement: <ErrorPage />,
},
{
  path: "/gallery",
  element: (
    <>
      <NavBar1 />
      <FoodGallery/>
    </>

  ),
   errorElement: <ErrorPage />,
},
{

    path :'/support',
    element:(
    <ContactHelp/>
  ),
       errorElement: <ErrorPage />,
},
{
  path :'/reservation',
  element: (
    <ProtectedRoute>
    <>
      <NavBar1 />
      <Reservation/>
    </>
    </ProtectedRoute>
  ),
   errorElement: <ErrorPage />,
},
];

export default routes;