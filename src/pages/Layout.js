import { Outlet } from "react-router-dom";
import TransparentNavbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="home-container">
      <TransparentNavbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
