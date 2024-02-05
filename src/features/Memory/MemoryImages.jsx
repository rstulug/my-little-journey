import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import { useUser } from "../authentication/useUser";
import { useParams } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { useInsertMemoryImages } from "./useInsertMemoryImages";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useEffect } from "react";
import { useGetUserMemoryImages } from "./useGetMemoryImages";
import Carousel from "../../ui/Carousel";
import { Modal } from "../../ui/Modal";

function MemoryImages() {
  const { register, handleSubmit, formState, setError, reset, clearErrors } =
    useForm();
  const { errors } = formState;

  const { user } = useUser();
  const { memoryId } = useParams();
  const { data, isLoading } = useGetUserMemoryImages();
  const { insertImages, status } = useInsertMemoryImages();

  useEffect(
    function () {
      if (formState.isSubmitSuccessful) reset();
      clearErrors("memoryImages");
    },
    [formState.isSubmitSuccessful, clearErrors, reset, memoryId]
  );

  const images =
    data && data.length > 0
      ? data.map(
          (image) =>
            "https://bxezmnvpntsmpijizrlm.supabase.co/storage/v1/object/public/images/" +
            user.id +
            "/" +
            memoryId +
            "/" +
            image.name
        )
      : [];

  function onSubmit({ memoryImages }) {
    if (
      (memoryImages && memoryImages.length === 0) ||
      memoryImages.length + images.length > 5
    ) {
      setError(
        "memoryImages",
        { type: "maxLength", message: "Maximum 5 images can be uploaded" },
        { shouldFocus: false }
      );
    } else {
      const imageFiles = memoryImages
        ? Object.keys(memoryImages).map((image, i) => {
            return {
              imageNames:
                user.id + "/" + memoryId + "/" + i.toString() + "_" + uuidv4(),
              imageFile: memoryImages[i],
            };
          })
        : [];
      insertImages(imageFiles);
    }
  }

  if (!user || !memoryId) return null;
  if (status === "pending" || isLoading)
    return (
      <div className="flex justify-center items-center w-full h-40">
        <Spinner />
      </div>
    );

  return (
    <div>
      {images.length > 0 && <Carousel images={images} />}

      {images.length < 6 && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormRow label=" Add Images" error={errors?.memoryImages?.message}>
            <input
              type="file"
              id="memoryImages"
              multiple
              accept="image/*"
              // accept=".jpg, .jpeg, .png"
              className="w-full text-lg font-semibold focus:outline-0  border-gray-900 border-2 text-black rounded-md bg-white"
              {...register("memoryImages")}
            />
          </FormRow>
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
      )}
    </div>
  );
}

export default MemoryImages;
