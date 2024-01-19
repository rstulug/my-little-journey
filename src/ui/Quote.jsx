import useQuote from "../hooks/useQuote";
import Spinner from "./Spinner";

function Quote() {
  const { data, isLoading } = useQuote();
  if (isLoading) return <Spinner />;

  const quote = data[0].quote || "To be or not to be";
  const author = data[0].author || "William Shakespeare";
  return (
    <div className="flex justify-center items-center flex-col text-md text-center">
      <p>{quote}</p>
      <p className=" flex  text-lg justify-end w-full">{author}</p>
    </div>
  );
}

export default Quote;
