import { useForm } from "react-hook-form";
import { useLocation } from "../context/LocationContext";
import Form from "./Form";
import FormRow from "./FormRow";
import { useEffect } from "react";
import Button from "./Button";

function MemoryForm() {
  const { location } = useLocation();
  console.log(location);
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  function onSubmit() {}

  useEffect(
    function () {
      reset();
    },
    [location, reset]
  );
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
          <FormRow label="Visitted Date" error={errors?.date?.message}>
            <input
              type="date"
              id="date"
              defaultValue={new Date().toJSON().slice(0, 10)}
              {...register("date")}
            />
          </FormRow>
          <FormRow label="With who" error={errors?.withWho?.message}>
            <input type="text" id="withWho" {...register("withWho")} />
          </FormRow>
          <FormRow label="Your memory" error={errors?.memory?.message}>
            <textarea rows="20" cols="60" id="memory" {...register("memory")} />
          </FormRow>
        </Form>
        <div className="flex justify-end mt-2">
          <Button type="green" size="large" btnName="Submit" />
        </div>
      </div>
    );
}

export default MemoryForm;
