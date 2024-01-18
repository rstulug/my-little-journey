import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: signUp, status } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (data) => {
      console.log(data);
      queryClient.setQueryData(["user"], data.user);
      navigate(`/user/${data.user.user_metadata.usernameSlug}`);
    },
    onError: (err) =>
      toast.error(
        `An error occured. Please check email, password and username. Error:${err.message}`
      ),
  });
  return { signUp, status };
}
