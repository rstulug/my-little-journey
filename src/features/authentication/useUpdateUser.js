import { useMutation } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const navigate = useNavigate();
  const { mutate: updateUser, status } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      navigate("/login");
    },
    onError: (err) =>
      toast.error(
        `An error occured during email recovery. Error: ${err.message} `
      ),
  });

  return { updateUser, status };
}
