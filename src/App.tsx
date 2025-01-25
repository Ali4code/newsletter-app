import { Provider } from "react-redux";
import { AuthenticationHeader } from "./components/AuthenticationHeader/AuthenticationHeader";
import { store } from "./store/store";
import { useGetApiKeys } from "./utils/useGetApiKeys";
import { Tabs } from "./components/Tabs/Tabs";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const { apiKeys, setApiKeys } = useGetApiKeys();
  return (
    <Provider store={store}>
      <Navbar />
      <AuthenticationHeader
        setStoredApiKeys={setApiKeys}
        storedApiKeys={apiKeys}
      />
      <Tabs apiKeys={apiKeys} />
    </Provider>
  );
}

export default App;
