import { Outlet, useOutlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

import Dashboard from "../pages/Dashboard";

function AppLayout() {
  const outlet = useOutlet();
  return (
    <div className="w-full bg-stone-200 m-0 font-[monospace] dark:bg-neutral-800 text-slate-800 dark:text-neutral-300 text-md relative">
      <div className="min-h-screen max-w-screen-xl mx-auto flex flex-col">
        <Header />
        {outlet ? <Outlet /> : <Dashboard />}
        <div className="fixed bottom-0 left-0 flex h-10 w-full   border-gray-500 bg-stone-400 dark:bg-stone-500 justify-center ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
