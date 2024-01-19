import EmptyPage from "../../ui/EmptyPage";
import MemoryItem from "../../ui/MemoryItem";
import Spinner from "../../ui/Spinner";
import { useUser } from "../authentication/useUser";
import { useGetUserMemories } from "./useGetUserMemories";

function SavedMemories() {
  const { user, isLoading: isUserLoading } = useUser();

  const { userMemories, isLoading } = useGetUserMemories({ id: user?.id });

  if (isLoading || isUserLoading) return <Spinner />;

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
    </div>
  );
}

export default SavedMemories;
