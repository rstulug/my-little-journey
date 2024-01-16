import { Outlet, useOutlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import MapUI from "./MapUI";

import UseableArea from "./UseableArea";

function AppLayout() {
  const outlet = useOutlet();
  return (
    <div className="w-full bg-stone-200 m-0 font-[monospace] dark:bg-neutral-800 text-slate-700 dark:text-neutral-300 text-md relative">
      <div className="min-h-screen max-w-screen-xl mx-auto flex flex-col">
        <Header />
        {outlet ? (
          <Outlet />
        ) : (
          <div className="flex flex-row justify-center overflow-auto mb-10">
            <div className="w-2/6">Sidebar burada olacak</div>
            <div className="flex w-4/6 flex-col gap-4 h-full">
              <div className="h-4/6">
                <MapUI />
              </div>
              <div className="h-2/6">
                <UseableArea />
              </div>
            </div>
          </div>
        )}
        <div className="fixed bottom-0 left-0 flex h-10 w-full   border-gray-500 bg-stone-200 dark:bg-stone-500 justify-center ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
