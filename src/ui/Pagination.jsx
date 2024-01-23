import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

function Pagination({ lastPage, setCurPage, curPage }) {
  function handlePreviousPage() {
    setCurPage((cur) => cur - 1);
  }

  function handleNextPage() {
    setCurPage((cur) => cur + 1);
  }

  function handleChange(e) {
    setCurPage(() => e.target.value);
  }
  return (
    <div className="flex flex-row items-center justify-between font-semibold">
      {curPage > 1 && (
        <button
          className="flex flex-row items-center"
          onClick={handlePreviousPage}
          title="Bir önceki sayfa"
        >
          <HiArrowLeft />
          {curPage - 1}
        </button>
      )}
      <div className="mx-4 ">
        <select
          value={curPage}
          onChange={handleChange}
          className="rounded-md bg-green-200 dark:bg-stone-600"
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
          <HiArrowRight />
        </button>
      )}
    </div>
  );
}

export default Pagination;
