import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";

import { useUpdateMemory } from "./useUpdateMemory";
import Button from "../../ui/Button";

function MemoryUpdateForm({ memory }) {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { updateMemory, status } = useUpdateMemory();

  function onSubmit({ country, region, date, withWho, updatedMemory, title }) {
    updateMemory({
      id: memory.id,
      obj: {
        title,
        country,
        region,
        date,
        withWho,
        memory: updatedMemory,
        lat: memory.lat,
        lng: memory.lng,
        User: memory.User,
      },
    });
  }

  return (
    <Form
      header={`Update your ${memory.title} memory`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormRow label="Title" error={errors?.title?.message}>
        <input
          type="text"
          id="title"
          disabled={status.pending}
          defaultValue={memory.title}
          className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0 "
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
          className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0"
          defaultValue={memory.country}
          {...register("country", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="Region" error={errors?.region?.message}>
        <input
          type="text"
          id="region"
          disabled={status.pending}
          className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0"
          defaultValue={memory.region}
          {...register("region", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="Visitted Date" error={errors?.date?.message}>
        <input
          type="date"
          id="date"
          disabled={status.pending}
          className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0"
          defaultValue={memory.date}
          {...register("date", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="With who" error={errors?.withWho?.message}>
        <input
          type="text"
          id="withWho"
          disabled={status.pending}
          defaultValue={memory.withWho}
          className="text-lg w-full rounded-lg font-semibold px-3 focus:outline-0"
          {...register("withWho")}
        />
      </FormRow>
      <FormRow label="Your memory" error={errors?.updatedMemory?.message}>
        <textarea
          rows="10"
          cols="40"
          id="updatedMemory"
          disabled={status.pending}
          defaultValue={memory.memory}
          className="w-full text-lg font-semibold focus:outline-0 px-2"
          {...register("updatedMemory", { required: "This area is required" })}
        />
      </FormRow>
      <div className="flex justify-end mt-2">
        <Button
          type="submit"
          style="green"
          size="large"
          btnName="Update"
          disabled={status.pending}
        />
      </div>
    </Form>
  );
}

export default MemoryUpdateForm;
