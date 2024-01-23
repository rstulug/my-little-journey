import { useQuery } from "@tanstack/react-query";

import { getUserMemories } from "../../services/apiMemory";
import { useUser } from "../authentication/useUser";

export function useGetUserMemories() {
  const { user } = useUser();

  const { data: userMemories, isLoading } = useQuery({
    queryKey: ["user", user?.id, "savedMemories"],
    queryFn: () => getUserMemories(user?.id),
  });
  return { userMemories, isLoading };
}
