import { useEffect } from "react";
import ForgotPasswordForm from "../features/authentication/ForgotPasswordForm";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (user && !isLoading) {
        navigate(`/user/${user.user_metadata.usernameSlug}`);
      }
    },
    [user, navigate, isLoading]
  );
  if (!user)
    return (
      <div className=" mx-auto shadow-lg shadow-sky-500 py-7 my-20 w-[80%] px-4 border-2 border-sky-500 rounded-xl">
        <ForgotPasswordForm />
      </div>
    );
}

export default ForgotPassword;
