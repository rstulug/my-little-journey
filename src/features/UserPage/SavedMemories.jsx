import EmptyPage from "../../ui/EmptyPage";
import MemoryItem from "../../ui/MemoryItem";
import Spinner from "../../ui/Spinner";

import { useGetUserMemories } from "./useGetUserMemories";

function SavedMemories() {
  const { userMemories, isLoading } = useGetUserMemories();

  if (isLoading && !userMemories) return <Spinner />;
  if (!userMemories) return <EmptyPage />;
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
    </div>
  );
}

export default SavedMemories;
