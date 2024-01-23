import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMemory as deleteMemoryApi } from "../../services/apiMemory";
import { useUser } from "../authentication/useUser";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useDeleteMemory() {
  const { user } = useUser();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: deleteMemory, status } = useMutation({
    mutationFn: deleteMemoryApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["user", user?.id, "savedMemories"]);
      navigate(`/user/${user.user_metadata.usernameSlug}`);
    },
    onError: (err) =>
      toast.error(
        `An error occured during deleting memory. Error: ${err.message}`
      ),
  });
  return { deleteMemory, status };
}
