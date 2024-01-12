import { IconContext } from "react-icons";
import Button from "./Button";
import Logo from "./Logo";
import { HiOutlineUser, HiMiniPencilSquare } from "react-icons/hi2";
import Quote from "./Quote";

function Header() {
  return (
    <div className="border-gray-500 border-b-2 pb-2 flex flex-col justify-between sm:flex-row">
      <Logo />
      <div className="hidden md:flex md:w-4/6">
        <Quote />
      </div>
      <div className="flex justify-center items-center gap-4">
        <Button
          to="/login"
          type="iconic"
          icon={
            <IconContext.Provider value={{ size: "2rem" }}>
              <HiOutlineUser />
            </IconContext.Provider>
          }
          title="Sign in"
        />
        <Button
          to="/signup"
          type="iconic"
          icon={
            <IconContext.Provider value={{ size: "2rem" }}>
              <HiMiniPencilSquare />
            </IconContext.Provider>
          }
          title="Sign up"
        />
      </div>
    </div>
  );
}

export default Header;
