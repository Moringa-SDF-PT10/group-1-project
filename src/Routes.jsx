// routes.jsx
import Home from './components/Home';
// import Profile from './components/Profile';
// import Login from './components/Login';
// import SignUp from './components/Sign-Up';
import RestaurantList from './components/RestaurantList';
import RestaurantDetails from './components/RestaurantDetails';
import Layout from './components/Layout';
import FoodGallery from './components/FoodGallery';
import ContactHelp from './components/ContactHelp';
import Favorites from './components/Favorites';

const Routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/restaurants', element: <RestaurantList /> },
      { path: '/restaurants/:id', element: <RestaurantDetails /> },
      // { path: '/profile', element: <Profile /> },
      // { path: '/login', element: <Login /> },
      // { path: '/signin', element: <SignUp /> },
      {path: '/favorites' , element:<Favorites/>},
      {path :'/gallery', element:<FoodGallery/>},
      {path :'/support', element:<ContactHelp/>}
    ],
  },
];

export default Routes;