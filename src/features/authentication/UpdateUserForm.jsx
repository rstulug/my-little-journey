import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "./useUpdateUser";

function UpdateUserForm() {
  const { register, handleSubmit, formState, reset, getValues } = useForm();
  const { errors } = formState;
  const { updateUser, status } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password: password });
  }

  return (
    <Form header="Update your password" onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Password" error={errors?.password?.message}>
        <input
          type="password"
          id="password"
          className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0 border-gray-900 border-2 "
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
          className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0 border-gray-900 border-2 "
          disabled={status.pending}
          {...register("password2", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords don't match",
          })}
        />
      </FormRow>
      <div className="flex justify-end mt-2 gap-4">
        <Button
          type="submit"
          style="green"
          size="large"
          btnName="Update"
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
    </Form>
  );
}

export default UpdateUserForm;
