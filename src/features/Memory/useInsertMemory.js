import { useMutation } from "@tanstack/react-query";
import { insertMemory as insertMemoryApi } from "../../services/apiMemory";

export function useInserMemory() {
  const { mutate: insertMemory, status } = useMutation({
    mutationFn: insertMemoryApi,
  });
  return { insertMemory, status };
}
