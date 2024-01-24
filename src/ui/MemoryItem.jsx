import { NavLink } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

function MemoryItem({ memory }) {
  const { user } = useUser();

  return (
    <NavLink
      to={`/user/${user.user_metadata.usernameSlug}/memory/${memory.id}`}
      className={({ isActive }) =>
        isActive
          ? " items-center rounded-xl bg-sky-300 px-2 dark:bg-emerald-700 w-5/6 text-center  text-lg font-semibold py-2"
          : "items-center  hover:rounded-xl hover:bg-sky-200  dark:hover:bg-emerald-400 w-5/6 text-center py-2 text-lg hover:text-black font-semibold"
      }
    >
      <div>{memory.title}</div>
      <div className="flex flex-row justify-around text-sm">
        <div className="text-sm ">{memory.date}</div>
        <div>
          {memory.region} - {memory.country}
        </div>
      </div>
    </NavLink>
  );
}

export default MemoryItem;
