import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMemoryImage as deleteMemoryImageApi } from "../../services/apiMemory";
import toast from "react-hot-toast";
import { useUser } from "../authentication/useUser";
import { useParams } from "react-router-dom";

export function useDeleteMemoryImage() {
  const { user } = useUser();
  const { memoryId } = useParams();
  const queryClient = useQueryClient();
  const { mutate: deleteMemoryImage, status: deleteStatus } = useMutation({
    mutationFn: deleteMemoryImageApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["images", user?.id, memoryId]);
      toast.success("Image has been deleted successfully");
    },
    onError: (err) =>
      toast.error(
        `An error occured during deleting memory image. Error:${err.message}`
      ),
  });
  return { deleteMemoryImage, deleteStatus };
}
