import "./App.css";
import "./components/header.js";
import Header from "./components/header.js";
import SearchForm from "./components/searchform";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchForm />
    </div>
  );
}

export default App;
