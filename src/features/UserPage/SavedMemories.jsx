import EmptyPage from "../../ui/EmptyPage";
import MemoryItem from "../../ui/MemoryItem";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import { MEMORY_PER_PAGE } from "../../utils/constant";

import { useGetUserMemories } from "./useGetUserMemories";

function SavedMemories() {
  const { userMemories, count, isLoading } = useGetUserMemories();

  if (isLoading && !userMemories) return <Spinner />;
  if (userMemories.length < 1) return <EmptyPage />;

  return (
    <div>
      <h2 className="text-bold text-center text-2xl border-2 dark:border-gray-200 mt-5 rounded-lg py-4 dark:text-amber-600">
        Your Memories
      </h2>
      <ul className="flex justify-center items-center gap-4 flex-col mt-6">
        {userMemories.map((memory) => (
          <MemoryItem memory={memory} key={memory.id} />
        ))}
      </ul>
      {count > MEMORY_PER_PAGE && (
        <div className="flex justify-end mt-2 mr-3">
          <Pagination count={count} />
        </div>
      )}
    </div>
  );
}

export default SavedMemories;
