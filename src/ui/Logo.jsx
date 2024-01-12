import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex flex-row justify-center items-center">
      <img src="/phonix.png" className="h-20 rounded-full " />
      <div className="ml-2 text-center text-lg">
        <div>My </div>
        <div className="text-sm">little</div>
        <div>Journey</div>
      </div>
    </Link>
  );
}

export default Logo;
