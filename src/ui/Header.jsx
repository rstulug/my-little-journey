import { IconContext } from "react-icons";
import Button from "./Button";
import Logo from "./Logo";
import {
  HiOutlineUser,
  HiMiniPencilSquare,
  HiArrowRightOnRectangle,
} from "react-icons/hi2";
import Quote from "./Quote";
import { useUser } from "../features/authentication/useUser";
import { useLogout } from "../features/authentication/useLogout";
import { Link } from "react-router-dom";

function Header() {
  const { user, isLoading } = useUser();
  const { logout } = useLogout();

  return (
    <div className="border-gray-500 border-b-2 pb-2 flex flex-col justify-between sm:flex-row gap-6 items-center">
      <div>
        <Logo />
      </div>
      <div className="hidden md:flex  md:justify-center md:items-center md:w-[80%] md:mx-auto">
        <Quote />
      </div>
      <div>
        {user && !isLoading ? (
          <div className="flex justify-center items-center ">
            <Link
              className="text-lg font-semibold text-wrap"
              to={`/user/${user.user_metadata.usernameSlug}`}
            >
              {user.user_metadata.username}
            </Link>

            <Button
              onClick={() => logout()}
              style="iconic"
              icon={
                <IconContext.Provider value={{ size: "2rem" }}>
                  <HiArrowRightOnRectangle />
                </IconContext.Provider>
              }
              title="Sign up"
            />
          </div>
        ) : (
          <div className="flex justify-center items-center gap-3">
            <Button
              to="/login"
              style="iconic"
              icon={
                <IconContext.Provider value={{ size: "2rem" }}>
                  <HiOutlineUser />
                </IconContext.Provider>
              }
              title="Sign in"
            />
            <Button
              to="/signup"
              style="iconic"
              icon={
                <IconContext.Provider value={{ size: "2rem" }}>
                  <HiMiniPencilSquare />
                </IconContext.Provider>
              }
              title="Sign up"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
