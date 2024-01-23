import Button from "./Button";
import { useModal } from "./Modal";

function ConfirmDelete({ onClick }) {
  const { close } = useModal();
  return (
    <div className="flex justify-center flex-col gap-4 py-4 items-center">
      <div className="font-bold text-xl">
        Do you really want to delete this memory? This action cannot be undone
      </div>
      <div className="flex justify-center flex-row gap-3">
        <Button
          btnName="Confirm"
          style="red"
          size="large"
          onClick={() => onClick()}
        />
        <Button
          btnName="Quit"
          style="yellow"
          size="large"
          onClick={() => close()}
        />
      </div>
    </div>
  );
}

export default ConfirmDelete;
