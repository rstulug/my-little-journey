import { useQuery } from "@tanstack/react-query";
import { useUser } from "../authentication/useUser";
import { useParams } from "react-router-dom";
import { getMemoryImages } from "../../services/apiMemory";

export function useGetUserMemoryImages() {
  const { user } = useUser();
  const { memoryId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["images", user?.id, memoryId],
    queryFn: () =>
      getMemoryImages(user?.id.toString() + "/" + memoryId.toString()),
  });

  return { data, isLoading };
}
