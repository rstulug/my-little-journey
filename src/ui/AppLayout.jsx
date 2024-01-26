import { Outlet, useOutlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

import Dashboard from "../pages/Dashboard";

function AppLayout() {
  const outlet = useOutlet();
  return (
    <div
      className="  m-0 font-[monospace]  text-neutral-100 text-md relative w-auto overflow-x-scroll min-h-screen "
      style={{
        backgroundImage:
          "linear-gradient(rgba(31, 28, 31, 0.651), rgba(73, 68, 68, 0.658)),url('/public/memory_map.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className=" max-w-screen-xl mx-auto flex flex-col">
        <Header />
        {outlet ? <Outlet /> : <Dashboard />}
        <div className="fixed bottom-0 left-0 flex h-10 w-full   border-gray-400  bg-stone-600 justify-center ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
