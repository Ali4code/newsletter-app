import { Provider } from "react-redux";
import { AuthenticationHeader } from "./components/AuthenticationHeader/AuthenticationHeader";
import { store } from "./store/store";
import { NavbarContainer } from "./components/Navbar/NavbarContainer";

function App() {
  return (
    <Provider store={store}>
      <NavbarContainer />
      <AuthenticationHeader
      />
      {/* <Tabs apiKeys={apiKeys} /> */}
    </Provider>
  );
}

export default App;
