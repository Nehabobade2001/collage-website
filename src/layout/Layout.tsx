// // import TopBar from "./TopBar"
// // import HeaderOne from "./Header";
// import Navbar from "./Navbar";

// const Layout = () => {
//   return (
//     <>
//       {/* <TopBar /> */}
//       <Navbar />
//       {/* <HeaderOne /> */}
//     </>
//   );
// };

// export default Layout;
import Footer from "../pages/Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;