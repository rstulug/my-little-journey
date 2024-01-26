import { useState } from "react";
import EmptyPage from "../../ui/EmptyPage";
import MemoryItem from "../../ui/MemoryItem";
import Spinner from "../../ui/Spinner";

import { useGetUserMemories } from "./useGetUserMemories";
import { MEMORY_PER_PAGE } from "../../utils/constant";
import Pagination from "../../ui/Pagination";

function SavedMemories() {
  const { userMemories, isLoading } = useGetUserMemories();
  const [curPage, setCurPage] = useState(1);

  if (isLoading && !userMemories) return <Spinner />;

  if (userMemories && userMemories.length < 1) return <EmptyPage />;

  const paginatedMemories =
    MEMORY_PER_PAGE > userMemories.length
      ? userMemories
      : userMemories.filter((memory, i) => {
          if (
            i < MEMORY_PER_PAGE * curPage &&
            i >= MEMORY_PER_PAGE * (curPage - 1)
          )
            return memory;
        });

  const lastPage = Math.ceil(userMemories.length / MEMORY_PER_PAGE) || 0;

  return (
    <div>
      <h2 className="text-bold text-center text-2xl border-2 border-gray-200 mt-5 rounded-lg py-4 text-amber-600 ">
        Your Memories
      </h2>
      <ul className="flex justify-center items-center gap-4 flex-col mt-6">
        {paginatedMemories.map((memory) => (
          <MemoryItem memory={memory} key={memory.id} />
        ))}
      </ul>
      {MEMORY_PER_PAGE < userMemories.length && (
        <div className="flex justify-end mr-2 text-lg">
          <Pagination
            curPage={curPage}
            setCurPage={setCurPage}
            lastPage={lastPage}
          />
        </div>
      )}
    </div>
  );
}

export default SavedMemories;
