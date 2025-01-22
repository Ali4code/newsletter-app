import "./App.css";
import { AuthenticationHeader } from "./components/AuthenticationHeader/AuthenticationHeader";
import { NewsLetter } from "./components/NewsLetter/NewsLetter";

function App() {
  return (
    <div>
      <AuthenticationHeader />
      <NewsLetter />
    </div>
  );
}

export default App;
