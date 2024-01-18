import { useEffect } from "react";
import SignupForm from "../features/authentication/SignupForm";
import Spinner from "../ui/Spinner";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";

function SignUp() {
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
  if (isLoading) return <Spinner />;

  if (!user) return <SignupForm />;
}

export default SignUp;
