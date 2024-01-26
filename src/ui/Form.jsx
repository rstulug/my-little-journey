function Form({ children, onSubmit, header }) {
  return (
    <div>
      <h2 className="font-bold text-xl flex justify-center dark:text-green-600 ">
        {header}
      </h2>
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
}

export default Form;
