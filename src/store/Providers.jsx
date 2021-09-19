import { ModalProvider } from "./modalStore";
import { FilterProvider } from "./filterStore";

function Providers({ children }) {
  return (
    <FilterProvider>
      <ModalProvider>{children}</ModalProvider>;
    </FilterProvider>
  );
}

export default Providers;
