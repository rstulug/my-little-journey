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
        backgroundImage: `linear-gradient(rgba(53, 52, 53, 0.938), rgba(15, 15, 15, 0.822)),url(${
          outlet ? "/memory_map.jpg" : "/save_your_memories.jpg"
        })
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
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
