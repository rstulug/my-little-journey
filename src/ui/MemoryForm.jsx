import { useForm } from "react-hook-form";
import { useLocation } from "../context/LocationContext";
import Form from "./Form";
import FormRow from "./FormRow";

function MemoryForm() {
  const { location } = useLocation();
  console.log(location);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  function onSubmit() {}
  if (location.country)
    return (
      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormRow label="Country" error={errors?.country?.message}>
            <input
              type="text"
              id="country"
              defaultValue={location.country}
              {...register("country")}
            />
          </FormRow>
          <FormRow label="Region" error={errors?.region?.message}>
            <input
              type="text"
              id="region"
              defaultValue={location.name}
              {...register("region")}
            />
          </FormRow>
        </Form>
      </div>
    );
}

export default MemoryForm;
