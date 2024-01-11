import Button from "./Button";

function AppLayout() {
  return (
    <div className="w-full bg-stone-200 m-0 font-[monospace] dark:bg-neutral-800 text-slate-700 dark:text-neutral-300 text-md">
      <div className="min-h-screen max-w-screen-lg mx-auto ">
        <Button btnName="Deneme" type="iconic" size="regular" />
      </div>
    </div>
  );
}

export default AppLayout;
