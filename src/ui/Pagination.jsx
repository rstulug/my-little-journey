import { useSearchParams } from "react-router-dom";
import { MEMORY_PER_PAGE } from "../utils/constant";
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const lastPage = Math.ceil(count / MEMORY_PER_PAGE);

  function handlePreviousPage() {
    searchParams.set("page", curPage - 1);
    setSearchParams(searchParams);
  }

  function handleNextPage() {
    searchParams.set("page", curPage + 1);
    setSearchParams(searchParams);
  }

  function handleChange(e) {
    searchParams.set("page", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex flex-row items-center justify-between font-semibold text-lg">
      {curPage > 1 && (
        <button
          className="flex flex-row items-center "
          onClick={handlePreviousPage}
          title="Bir önceki sayfa"
        >
          <HiMiniArrowLongLeft />
          {curPage - 1}
        </button>
      )}
      <div className="mx-4 ">
        <select
          value={curPage}
          onChange={handleChange}
          className="rounded-md bg-green-200 dark:bg-stone-500"
        >
          {Array.from({ length: lastPage }, (v, i) => i + 1).map((page) => (
            <option value={page} key={page}>
              {page}
            </option>
          ))}
        </select>
      </div>
      {curPage < lastPage && (
        <button
          className="flex flex-row items-center"
          onClick={handleNextPage}
          title="Bir sonraki sayfa"
        >
          {curPage + 1}
          <HiMiniArrowLongRight />
        </button>
      )}
    </div>
  );
}

export default Pagination;
