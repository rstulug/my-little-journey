import { useNavigate } from "react-router-dom";
import Button from "./Button";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-stone-200 m-0 font-[monospace] dark:bg-neutral-800 text-slate-700  dark:text-neutral-300 min-h-screen">
      <div className="text-xl font-bold">
        The page what you are looking for is not found
      </div>
      <Button
        btnName="Return back"
        type="red"
        size="large"
        onClick={() => navigate(-1)}
      />
    </div>
  );
}

export default PageNotFound;
