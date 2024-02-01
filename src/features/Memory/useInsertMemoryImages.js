import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../authentication/useUser";
import { useParams } from "react-router";
import { insertMemoryImages as insertMemoryImagesApi } from "../../services/apiMemory";
import toast from "react-hot-toast";

export function useInsertMemoryImages() {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const { memoryId } = useParams();
  const { mutate: insertImages, status } = useMutation({
    mutationFn: insertMemoryImagesApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["images", user.id, memoryId]);
      toast.success("Images successfully uploaded");
    },
    onError: (err) =>
      toast.error(
        `An error occured during the uploading images. Error: ${err.message}`
      ),
  });

  return { insertImages, status };
}
