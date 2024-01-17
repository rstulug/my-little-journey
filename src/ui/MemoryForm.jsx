import { useForm } from "react-hook-form";
import { useLocation } from "../context/LocationContext";
import Form from "./Form";
import FormRow from "./FormRow";
import { useEffect } from "react";
import Button from "./Button";
import Spinner from "./Spinner";

function MemoryForm() {
  const { location, isLoading } = useLocation();

  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ country, region, date, withWho, memory }) {
    console.log(date);
  }

  useEffect(
    function () {
      reset();
    },
    [location, reset]
  );
  if (isLoading)
    return (
      <div className="flex-1 justify-center mt-5">
        <Spinner />
      </div>
    );
  if (location)
    return (
      <Form onSubmit={handleSubmit(onSubmit)} header="Save your memory">
        <FormRow label="Title" error={errors?.title?.message}>
          <input
            type="text"
            id="title"
            className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0"
            {...register("title", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow label="Country" error={errors?.country?.message}>
          <input
            type="text"
            id="country"
            className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0"
            defaultValue={location.country}
            {...register("country", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow label="Region" error={errors?.region?.message}>
          <input
            type="text"
            id="region"
            className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0"
            defaultValue={location.name}
            {...register("region", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow label="Visitted Date" error={errors?.date?.message}>
          <input
            type="date"
            id="date"
            className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0"
            defaultValue={new Date().toJSON().slice(0, 10)}
            {...register("date", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow label="With who" error={errors?.withWho?.message}>
          <input
            type="text"
            id="withWho"
            className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0"
            {...register("withWho")}
          />
        </FormRow>
        <FormRow label="Your memory" error={errors?.memory?.message}>
          <textarea
            rows="10"
            cols="40"
            id="memory"
            className="w-full text-lg font-semibold focus:outline-0 px-2"
            {...register("memory", { required: "This area is required" })}
          />
        </FormRow>
        <div className="flex justify-end mt-2">
          <Button type="submit" style="green" size="large" btnName="Submit" />
        </div>
      </Form>
    );
}

export default MemoryForm;
