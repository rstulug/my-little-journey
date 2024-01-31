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

  if (!user)
    return (
      <div className=" mx-auto shadow-lg shadow-sky-500 py-7 my-20 w-[80%] px-4 border-2 border-sky-500 rounded-xl">
        <SignupForm />
      </div>
    );
}

export default SignUp;
