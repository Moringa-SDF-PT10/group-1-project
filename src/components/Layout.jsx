import { Outlet } from 'react-router-dom';
import Navbar from './NavBar1'; // adjust path if needed

const Layout = () => (
  <>
    <Navbar />
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;
