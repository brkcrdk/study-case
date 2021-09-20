import { ModalProvider } from "./modalStore";
import { FilterProvider } from "./filterStore";
import { CartProvider } from "./cartStore";

function Providers({ children }) {
  return (
    <FilterProvider>
      <CartProvider>
        <ModalProvider>{children}</ModalProvider>
      </CartProvider>
    </FilterProvider>
  );
}

export default Providers;
