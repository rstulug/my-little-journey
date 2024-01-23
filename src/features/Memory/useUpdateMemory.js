import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMemory as updateMemoryApi } from "../../services/apiMemory";
import toast from "react-hot-toast";

import { useUser } from "../authentication/useUser";
import { useModal } from "../../ui/Modal";

export function useUpdateMemory() {
  const { user } = useUser();
  const { close } = useModal();
  const queryClient = useQueryClient();

  const { mutate: updateMemory, status } = useMutation({
    mutationFn: updateMemoryApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["user", user?.id, data[0].id]);
      close();
    },
    onError: (err) => {
      toast.error(
        `An error occured during updating memory. Error: ${err.message}`
      );
    },
  });
  return { updateMemory, status };
}
