import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { useLogin } from "./useLogin";

function LoginForm() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const { login, status } = useLogin();

  function onSubmit({ email, password }) {
    login({ email, password });
  }

  return (
    <Form header="Login and enjoy..." onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Email" error={errors?.email?.message}>
        <input
          type="email"
          id="email"
          className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0 border-gray-900 border-2 "
          disabled={status.pending}
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
          disabled={status.pending}
          className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0 border-gray-900 border-2 "
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password cannot be lower than 8 characters",
            },
          })}
        />
      </FormRow>
      <div className="flex justify-between mt-2 gap-4">
        <div>
          <Button
            btnName="Reset Password"
            style="blue"
            size="large"
            to="/forgot-password"
          />
        </div>

        <div className="flex gap-4">
          <Button
            type="submit"
            style="green"
            size="large"
            btnName="Login"
            disabled={status.pending}
          />
          <Button
            style="yellow"
            size="large"
            btnName="Reset"
            disabled={status.pending}
            onClick={() => reset()}
          />
        </div>
      </div>
    </Form>
  );
}

export default LoginForm;
