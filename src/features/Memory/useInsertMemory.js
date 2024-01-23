import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertMemory as insertMemoryApi } from "../../services/apiMemory";
import { useUser } from "../authentication/useUser";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useInsertMemory() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { user } = useUser();
  const { mutate: insertMemory, status } = useMutation({
    mutationFn: insertMemoryApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["user"], user?.id, "savedMemories");
      toast.success("New memory is successfully saved");
      navigate(`/user/${user.user_metadata.usernameSlug}/memory/${data[0].id}`);
    },
    onError: (err) =>
      toast.error(
        `An error occured during saving new memory. Please try again later. Error: ${err.message}`
      ),
  });
  return { insertMemory, status };
}
