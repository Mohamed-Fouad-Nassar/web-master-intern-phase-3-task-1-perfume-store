import {
  useState,
  useEffect,
  useContext,
  cloneElement,
  createContext,
} from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

import useClickOutside from "../hooks/useClickOutside";

const ModalContext = createContext(undefined);

function Open({ opens, children }) {
  const { open } = useModalContext();
  return cloneElement(children, {
    onClick: () => open(opens),
  });
}

function Window({ name, title, children }) {
  const { modalName, close } = useModalContext();

  const modalRef = useClickOutside(close);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [close]);

  if (modalName === name)
    return createPortal(
      <div className="fixed inset-0 z-[1000] bg-backdrop backdrop-blur-sm transition-all duration-500 ">
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg max-h-[85%] min-w-[320px] overflow-y-auto transition-all duration-500 scrollbar-thin text-gray-300 bg-stone-900"
          ref={modalRef}
        >
          <div className="sticky top-0 px-3 py-2 rounded flex items-center border-b bg-stone-800 border-stone-700">
            <h2 className="flex-1 text-center font-semibold">
              {title ? title : modalName.split("-").join(" ")}
            </h2>
            <button
              className="p-1 rounded-sm cursor-pointer hover:bg-stone-900"
              onClick={close}
            >
              <X className="size-5 text-white/50" />
            </button>
          </div>
          <div className="p-4">{children}</div>
        </div>
      </div>,
      document.body
    );
  return null;
}

function Modal({ children }) {
  const [modalName, setModalName] = useState("");

  const close = () => setModalName("");
  const open = setModalName;

  return (
    <ModalContext.Provider value={{ modalName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
