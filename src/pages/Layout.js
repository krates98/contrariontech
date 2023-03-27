import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import TransparentNavbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="home-container">
      <TransparentNavbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
