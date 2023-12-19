import { Outlet } from "react-router-dom";
import SlidStep from "../components/SlideBar";

const RootLayout = () => {
  return (
    <div className="container">
      <SlidStep />
      <Outlet />
    </div>
  );
};

export default RootLayout;
