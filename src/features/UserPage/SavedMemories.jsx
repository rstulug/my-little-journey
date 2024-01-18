import Spinner from "../../ui/Spinner";
import { useUser } from "../authentication/useUser";
import { useGetUserMemories } from "./useGetUserMemories";

function SavedMemories() {
  const { user, isLoading: isUserLoading } = useUser();

  const { userMemories, isLoading } = useGetUserMemories(user?.id);
  console.log(userMemories);

  if (isLoading || isUserLoading) return <Spinner />;
  return <div></div>;
}

export default SavedMemories;
