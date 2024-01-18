import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, status } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], { user: user.user });

      navigate(`/user/${user.user.user_metadata.usernameSlug}`);
    },
    onError: () =>
      toast.error(`The email or password is wrong.Please try again`),
  });
  return { login, status };
}
