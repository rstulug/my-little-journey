import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { slugify } from "../../utils/helpers";
import { useSignup } from "./useSignup";

function SignupForm() {
  const { register, handleSubmit, formState, reset, getValues } = useForm();
  const { errors } = formState;

  const { signUp, status } = useSignup();

  function onSubmit({ email, password, username }) {
    const usernameSlug = slugify(username);
    signUp({ email, password, username, usernameSlug });
  }
  return (
    <Form
      header="Sign Up and begin to save your memories"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormRow label="Email" error={errors?.email?.message}>
        <input
          type="email"
          id="email"
          className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter a valid email",
            },
          })}
        />
      </FormRow>
      <FormRow label="Password" error={errors?.password?.message}>
        <input
          type="password"
          id="password"
          className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0"
          disabled={status.pending}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password cannot be lower than 8 characters",
            },
          })}
        />
      </FormRow>
      <FormRow label="Password again" error={errors?.password2?.message}>
        <input
          type="password"
          id="password2"
          className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0"
          disabled={status.pending}
          {...register("password2", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords don't match",
          })}
        />
      </FormRow>
      <FormRow label="Username" error={errors?.username?.message}>
        <input
          type="text"
          id="username"
          className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0"
          disabled={status.pending}
          {...register("username", {
            required: "This field is required",
            minLength: {
              value: 5,
              message: "Username cannot be lower than 5 characters",
            },
            maxLength: {
              value: 30,
              message: "Username cannot be higher than 30 characters",
            },
          })}
        />
      </FormRow>
      <div className="flex justify-end mt-3 gap-4">
        <Button
          type="submit"
          style="green"
          size="large"
          btnName="Sign Up"
          disabled={status.pending}
        />
        <Button
          type="reset"
          style="yellow"
          size="large"
          btnName="Reset"
          onClick={() => reset()}
          disabled={status.pending}
        />
      </div>
    </Form>
  );
}

export default SignupForm;
