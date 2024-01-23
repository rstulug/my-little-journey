import { useQuery } from "@tanstack/react-query";

import { getUserMemories } from "../../services/apiMemory";
import { useUser } from "../authentication/useUser";
import { useSearchParams } from "react-router-dom";

export function useGetUserMemories() {
  const [searchParams] = useSearchParams();

  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const { user } = useUser();

  const { data: { data: userMemories, count } = {}, isLoading } = useQuery({
    queryKey: ["user", user?.id, "savedMemories", curPage],
    queryFn: () => getUserMemories(user?.id, curPage),
  });
  return { userMemories, count, isLoading };
}
