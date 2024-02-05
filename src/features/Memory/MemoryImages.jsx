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
import { HiArrowsPointingOut, HiOutlineTrash } from "react-icons/hi2";
import { IconContext } from "react-icons";

import { useDeleteMemoryImage } from "./useDeleteMemoryImage";

function MemoryImages() {
  const { register, handleSubmit, formState, setError, reset, clearErrors } =
    useForm();
  const { errors } = formState;

  const { user } = useUser();
  const { memoryId } = useParams();
  const { data, isLoading } = useGetUserMemoryImages();
  const { insertImages, status } = useInsertMemoryImages();
  const { deleteMemoryImage } = useDeleteMemoryImage();

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
      {images.length > 0 && (
        <div>
          <Carousel images={images} imageHeight="24rem" />
          <div className="flex justify-end mt-2 mr-4 gap-3">
            <div>
              <Modal>
                <Modal.Open open="imagesOnModal">
                  <IconContext.Provider value={{ size: "1.5rem" }}>
                    <HiArrowsPointingOut />
                  </IconContext.Provider>
                </Modal.Open>
                <Modal.Window open="imagesOnModal">
                  <Carousel images={images} imageHeight="40rem" />
                </Modal.Window>
              </Modal>
            </div>
            <div>
              <Modal>
                <Modal.Open open="deleteImage">
                  <IconContext.Provider value={{ size: "1.5rem" }}>
                    <HiOutlineTrash />
                  </IconContext.Provider>
                </Modal.Open>
                <Modal.Window open="deleteImage">
                  <div className="flex flex-row gap-2 justify-center">
                    {images.map((image, i) => (
                      <div
                        key={data[i].id}
                        className="w-[20%] flex justify-center flex-col"
                      >
                        <img src={image} className="object-fit h-[80%]" />
                        <div className="flex justify-center mt-3">
                          <Button
                            btnName="Delete"
                            style="red"
                            size="regular"
                            onClick={() =>
                              deleteMemoryImage(
                                user.id + "/" + memoryId + "/" + data[i].name
                              )
                            }
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Modal.Window>
              </Modal>
            </div>
          </div>
        </div>
      )}

      {images.length < 5 && (
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
