import { useNavigate } from "react-router-dom";
import LoginForm from "../features/authentication/LoginForm";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";
import Spinner from "../ui/Spinner";

function Login() {
  const navigate = useNavigate();
  const { user, isLoading } = useUser();

  useEffect(
    function () {
      if (user && !isLoading) {
        navigate(`/user/${user.user_metadata.usernameSlug}`);
      }
    },
    [user, navigate, isLoading]
  );
  if (isLoading) return <Spinner />;

  if (!user) return <LoginForm />;
}

export default Login;
