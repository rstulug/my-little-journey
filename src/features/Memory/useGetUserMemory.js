import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getUserMemory } from "../../services/apiMemory";
import { useUser } from "../authentication/useUser";

export function useGetUserMemory() {
  const { memoryId } = useParams();
  const { user } = useUser();

  const { data: userMemory, isLoading } = useQuery({
    queryKey: ["user", user?.id, memoryId],
    queryFn: () => getUserMemory(memoryId),
  });

  return { userMemory, isLoading };
}
