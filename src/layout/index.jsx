import Header from "./Header";

function Layout({ children }) {
  return (
    <div data-testid="layout">
      <Header />
      {children}
    </div>
  );
}
export default Layout;
