import { Link } from "react-router-dom";

function Button({ btnName, type, size, onClick, to, icon, disabled, title }) {
  const styles = {
    primary:
      "text-gray-900  bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700   dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
    blue: "bg-blue-700 hover:bg-blue-700  rounded-md  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none ",

    dark: "bg-gray-800 hover:bg-gray-900  rounded-md  dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700",

    light:
      "text-gray-900 bg-white border border-gray-300  hover:bg-gray-100  rounded-md  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 ",

    green:
      " bg-green-600 hover:bg-green-500   rounded-md  dark:bg-green-700 dark:hover:bg-green-600",

    red: " bg-red-700 hover:bg-red-800   rounded-md  dark:bg-red-800 dark:hover:bg-red-600 ",
    yellow:
      " bg-yellow-700 hover:bg-yellow-800   rounded-md  dark:bg-yellow-800 dark:hover:bg-yellow-600 ",
    iconic:
      " bg-inherit hover:bg-stone-400 dark:hover:bg-neutral-600 rounded-md outline-none py-2 px-2",
  };

  const sizes = {
    extrasmall: "  text-[0.6rem] p-[0.3rem]",
    small: "  text-sm py-[0.6rem] px-1",
    regular: "   text-md py-1 px-2",
    large: "   text-lg py-1 px-3",
  };
  if (to)
    return (
      <Link to={to}>
        <button
          disabled={disabled}
          className={styles[type] + sizes[size]}
          title={title}
        >
          {icon}
          {btnName}
        </button>
      </Link>
    );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={styles[type] + sizes[size]}
      title={title}
    >
      {icon}
      {btnName}
    </button>
  );
}

export default Button;
