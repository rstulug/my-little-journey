import { useForm } from "react-hook-form";
import { useLocation } from "../../context/LocationContext";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { useEffect } from "react";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useInsertMemory } from "./useInsertMemory";
import { useUser } from "../authentication/useUser";

function MemoryForm() {
  const { location, isLoading } = useLocation();
  const { user } = useUser();

  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  const { insertMemory, status } = useInsertMemory();

  function onSubmit({ country, region, date, withWho, memory, title }) {
    insertMemory({
      title,
      country,
      region,
      date,
      withWho,
      memory,
      lat: location.lat,
      lng: location.lng,
      User: user.id,
    });
  }

  useEffect(
    function () {
      reset();
    },
    [location, reset, formState.isSubmitSuccessful]
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
            disabled={status.pending}
            className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0 border-gray-900 border-2 "
            {...register("title", {
              required: "This field is required",
              minLength: {
                value: 5,
                message: "Title cannot be lower than 5 characters",
              },
              maxLength: {
                value: 25,
                message: "Title cannot be higher than 25 characters",
              },
            })}
          />
        </FormRow>
        <FormRow label="Country" error={errors?.country?.message}>
          <input
            type="text"
            id="country"
            disabled={status.pending}
            className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0 border-gray-900 border-2 "
            defaultValue={location.country}
            {...register("country", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow label="Region" error={errors?.region?.message}>
          <input
            type="text"
            id="region"
            disabled={status.pending}
            className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0 border-gray-900 border-2 "
            defaultValue={location.name}
            {...register("region", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow label="Visitted Date" error={errors?.date?.message}>
          <input
            type="date"
            id="date"
            disabled={status.pending}
            className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0 border-gray-900 border-2 "
            defaultValue={new Date().toJSON().slice(0, 10)}
            {...register("date", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow label="With who" error={errors?.withWho?.message}>
          <input
            type="text"
            id="withWho"
            disabled={status.pending}
            className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0 border-gray-900 border-2 "
            {...register("withWho")}
          />
        </FormRow>
        <FormRow label="Your memory" error={errors?.memory?.message}>
          <textarea
            rows="10"
            cols="40"
            id="memory"
            disabled={status.pending}
            className="w-full text-lg font-semibold focus:outline-0 px-2 border-gray-900 border-2 0"
            {...register("memory", { required: "This area is required" })}
          />
        </FormRow>
        <div className="flex justify-center items-center text-lg">
          *You can add images after saving your memory
        </div>
        <div className="flex justify-end mt-2">
          <Button
            type="submit"
            style="green"
            size="large"
            btnName="Submit"
            disabled={status.pending}
          />
        </div>
      </Form>
    );
}

export default MemoryForm;
