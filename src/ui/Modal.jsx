import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { createPortal } from "react-dom";
import { HiMiniXMark } from "react-icons/hi2";
import Button from "./Button";
import { IconContext } from "react-icons";
import { useOutsideClick } from "../hooks/useOutsideClick";

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
  function handleClick() {
    openName === "" || openName !== windowsName ? open(windowsName) : close();
  }
  return <div onClick={handleClick}>{children}</div>;
}

function Window({ children, open: windowsName }) {
  const { openName, close } = useContext(ModalContext);

  const ref = useOutsideClick(close);

  if (openName !== windowsName) return null;

  return createPortal(
    <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center  w-full h-full z-50 m-0 backdrop-blur-md">
      <div
        className="flex flex-col dark:bg-gray-200  rounded-lg  justify-center  w-[50%] "
        ref={ref}
      >
        <div className="flex justify-end  mb-1">
          <Button
            icon={
              <IconContext.Provider value={{ size: "2rem" }}>
                <HiMiniXMark />
              </IconContext.Provider>
            }
            onClick={() => close()}
            style="iconic"
          />
        </div>
        <div className="px-4">{children}</div>
      </div>
    </div>,
    document.body
  );
}

function useModal() {
  const context = useContext(ModalContext);
  return context;
}

Modal.Open = Open;
Modal.Window = Window;

export { Modal, useModal };
