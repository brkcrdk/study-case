import { ModalProvider } from "./modalStore";

function Providers({ children }) {
  return <ModalProvider>{children}</ModalProvider>;
}

export default Providers;
