import { Provider } from "react-redux";
import { AuthenticationHeader } from "./components/AuthenticationHeader/AuthenticationHeader";
import { store } from "./store/store";
import { useGetApiKeys } from "./utils/useGetApiKeys";
import { Tabs } from "./components/Tabs/Tabs";
import { NavbarContainer } from "./components/Navbar/NavbarContainer";

function App() {
  const { apiKeys, setApiKeys } = useGetApiKeys();
  return (
    <Provider store={store}>
      <NavbarContainer />
      <AuthenticationHeader
        setStoredApiKeys={setApiKeys}
        storedApiKeys={apiKeys}
      />
      <Tabs apiKeys={apiKeys} />
    </Provider>
  );
}

export default App;
