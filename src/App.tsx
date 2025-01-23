import { Provider } from "react-redux";
import { AuthenticationHeader } from "./components/AuthenticationHeader/AuthenticationHeader";
import { NewsFeed } from "./components/NewsFeed/NewsFeed";
import { store } from "./store/store";
import { useGetApiKeys } from "./utils/useGetApiKeys";

function App() {
  const { apiKeys, setApiKeys } = useGetApiKeys();
  return (
    <Provider store={store}>
      <AuthenticationHeader setStoredApiKeys={setApiKeys} storedApiKeys={apiKeys} />
      <NewsFeed apiKeys={apiKeys} />
    </Provider>
  );
}

export default App;
