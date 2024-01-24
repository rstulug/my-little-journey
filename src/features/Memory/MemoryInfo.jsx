import { IconContext } from "react-icons";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useGetUserMemory } from "./useGetUserMemory";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import { Modal } from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteMemory } from "./useDeleteMemory";
import MemoryUpdateForm from "./MemoryUpdateForm";

function MemoryInfo() {
  const { userMemory, isLoading } = useGetUserMemory();
  const { deleteMemory } = useDeleteMemory();

  if (isLoading) return <Spinner />;
  return (
    <div className="flex justify-center flex-col items-center w-5/6 mx-auto">
      <div className="font-bold text-2xl dark:text-green-600 mb-3">
        {userMemory.title}
      </div>
      <div>
        <div className="font-semibold text-xl">
          You visited {userMemory.country} - {userMemory.region}{" "}
          {userMemory.withWho ? "with " : "alone"}
          <span className="dark:text-green-600">
            {userMemory.withWho}
          </span> at{" "}
          <span className="dark:text-green-600">{userMemory.date}</span>
        </div>
        <div>
          <h2 className="my-4 text-xl font-semibold">
            Your reviews for this memory:{" "}
          </h2>
          <div className="flex justify-start border-2 shadow-md rounded-md py-3 text-xl px-2 italic dark:shadow-slate-400">
            {userMemory.memory}
          </div>
        </div>
      </div>
      <div className="flex gap-3 mt-2 justify-end w-full mr-2">
        <Modal>
          <Modal.Open open="editMemory">
            <Button
              style="iconic"
              icon={
                <IconContext.Provider value={{ size: "2rem" }}>
                  <HiOutlinePencil />
                </IconContext.Provider>
              }
              title="Edit this memory"
            />
          </Modal.Open>
          <Modal.Window open="editMemory">
            <MemoryUpdateForm memory={userMemory} />
          </Modal.Window>
        </Modal>
        <Modal>
          <Modal.Open open="deleteMemory">
            <Button
              style="iconic"
              icon={
                <IconContext.Provider value={{ size: "2rem" }}>
                  <HiOutlineTrash />
                </IconContext.Provider>
              }
              title="Delete this memory"
            />
          </Modal.Open>
          <Modal.Window open="deleteMemory">
            <ConfirmDelete onClick={() => deleteMemory(userMemory.id)} />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default MemoryInfo;
