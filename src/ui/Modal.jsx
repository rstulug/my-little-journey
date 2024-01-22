import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { createPortal } from "react-dom";
import { HiMiniXMark } from "react-icons/hi2";
import Button from "./Button";
import { IconContext } from "react-icons";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const open = (windowsName) => setOpenName(windowsName);
  const close = () => setOpenName("");
  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, open: windowsName }) {
  const { open, openName, close } = useContext(ModalContext);
  function handleClick(e) {
    e.stopPropagation();
    openName === "" || openName !== windowsName ? open(windowsName) : close();
  }
  return <div onClick={handleClick}>{children}</div>;
}

function Window({ children, open: windowsName }) {
  const { openName, close } = useContext(ModalContext);

  if (openName !== windowsName) return null;

  return createPortal(
    <div className="flex justify-center items-center backdrop-blur-lg">
      <div className="flex justify-end mx-auto">
        {" "}
        <Button
          icon={
            <IconContext.Provider value={{ size: "2rem" }}>
              <HiMiniXMark />{" "}
            </IconContext.Provider>
          }
          onClick={() => close()}
          style="iconic"
        />
        <div>{children}</div>
      </div>
    </div>
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
