import { useState, createContext, useEffect } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState(null);
  const [header, setHeader] = useState("");

  useEffect(() => {
    if (!isModalOpen) {
      return setContent(null);
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      const handleKeyPress = (e) => {
        if (e.key === "Escape") return setIsModalOpen(false);
      };
      document.addEventListener("keydown", handleKeyPress);
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, [isModalOpen]);

  const closeModal = () => setIsModalOpen(false);

  const openModal = ({ content, header = "Header" }) => {
    setContent(content);
    setHeader(header);
    return setIsModalOpen(true);
  };

  const values = {
    isModalOpen,
    closeModal,
    openModal,
    content,
    header,
  };

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
