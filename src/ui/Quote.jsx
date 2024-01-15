import useQuote from "../hooks/useQuote";
import Spinner from "./Spinner";

function Quote() {
  const { data, error, isLoading } = useQuote();
  if (isLoading) return <Spinner />;
  if (error) return <p>To be or not to be</p>;
  return (
    <div className="flex justify-center items-center flex-col text-md text-center">
      <p>{data[0].quote}</p>
      <p className=" flex  text-lg justify-end w-full">{data[0].author}</p>
    </div>
  );
}

export default Quote;
