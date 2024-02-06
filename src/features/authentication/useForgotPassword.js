import { useMutation } from "@tanstack/react-query";
import { forgotPassword as forgotPasswordApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useForgotPassword() {
  const navigate = useNavigate();
  const { mutate: forgotPassword, status } = useMutation({
    mutationFn: forgotPasswordApi,
    onSuccess: () => {
      toast.success(
        "We sent you an email to recover your password. Please click it and follow the instructions"
      );
      navigate("/");
    },
    onError: (err) =>
      toast.error(
        `An error occured during recovering password. Error:${err.message}`
      ),
  });

  return { forgotPassword, status };
}
