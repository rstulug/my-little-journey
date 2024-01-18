import { useQuery } from "@tanstack/react-query";

import { getUserMemories } from "../../services/apiMemory";

export function useGetUserMemories({ id }) {
  const { data: userMemories, isLoading } = useQuery({
    queryKey: ["user", id, "savedMemories"],
    queryFn: () => getUserMemories(id),
  });
  return { userMemories, isLoading };
}
