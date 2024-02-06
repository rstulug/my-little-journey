import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { useForgotPassword } from "./useForgotPassword";
import Button from "../../ui/Button";

function ForgotPasswordForm() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  const { forgotPassword, status } = useForgotPassword();

  function onSubmit({ email }) {
    forgotPassword(email);
  }

  return (
    <Form
      header="Enter your e-mail to update your password"
      onSubmit={handleSubmit(onSubmit)}
    >
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
      <div className="flex justify-end mt-2">
        <Button type="submit" style="green" size="large" btnName="Submit" />
      </div>
    </Form>
  );
}

export default ForgotPasswordForm;
