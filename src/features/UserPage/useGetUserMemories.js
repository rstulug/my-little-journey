import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getUserMemories } from "../../services/apiMemory";

export function useGetUserMemories(id) {
  const { usernameSlug } = useParams();

  const { data: userMemories, isLoading } = useQuery({
    queryKey: ["user", usernameSlug, "savedMemories"],
    queryFn: () => getUserMemories(id),
  });
  return { userMemories, isLoading };
}
