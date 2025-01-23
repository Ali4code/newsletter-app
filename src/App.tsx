import { Provider } from "react-redux";
import { AuthenticationHeader } from "./components/AuthenticationHeader/AuthenticationHeader";
import { store } from "./store/store";
import { useGetApiKeys } from "./utils/useGetApiKeys";
import { Tabs } from "./components/Tabs/Tabs";

function App() {
  const { apiKeys, setApiKeys } = useGetApiKeys();
  return (
    <Provider store={store}>
      <AuthenticationHeader
        setStoredApiKeys={setApiKeys}
        storedApiKeys={apiKeys}
      />
      <Tabs apiKeys={apiKeys} />
    </Provider>
  );
}

export default App;
