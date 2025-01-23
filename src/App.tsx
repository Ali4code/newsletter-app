import { Provider } from "react-redux";
import { AuthenticationHeader } from "./components/AuthenticationHeader/AuthenticationHeader";
import { NewsFeed } from "./components/NewsFeed/NewsFeed";
import { store } from "./store/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <AuthenticationHeader />
      <NewsFeed />
    </Provider>
  );
}

export default App;
