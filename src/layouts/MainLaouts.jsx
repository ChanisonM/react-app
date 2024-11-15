import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

const MainLaouts = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="px-4 md:px-6 pt-12 pb-24 w-full xl:w-[45%] space-y-6">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainLaouts;
