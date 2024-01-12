import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="w-full bg-stone-200 m-0 font-[monospace] dark:bg-neutral-800 text-slate-700 dark:text-neutral-300 text-md relative">
      <div className="min-h-screen max-w-screen-xl mx-auto flex flex-col">
        <Header />
        <div className="fixed bottom-0 left-0 flex h-10 w-full   border-gray-500 bg-stone-200 dark:bg-stone-500 justify-center ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
