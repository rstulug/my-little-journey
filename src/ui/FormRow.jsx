function FormRow({ label, error, children }) {
  return (
    <div className="font-xl  ml-2 mt-3 flex items-center justify-start border-b-2 border-b-gray-400 py-4 ">
      <span className=" mr-2 w-1/6 text-lg font-semibold dark:text-green-600">
        {label}
      </span>

      <span className=" rounded-xl shadow-xl  text-gray-800">{children}</span>
      <span className="font-italic w-2/6 text-center text-xl font-medium text-pink-400 ">
        {error}
      </span>
    </div>
  );
}

export default FormRow;
