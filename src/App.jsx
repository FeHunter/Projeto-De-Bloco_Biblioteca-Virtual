import "./App.css";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import { BooksListPage } from "./Components/Pages/BooksListPage/BooksListPage";
import { useState } from "react";

function App() {
  // Search Bar
  const [search, setSearch] = useState("");
  function getTerm(searchTerm) {
    setSearch(searchTerm);
  }

  return (
    <div>
      <SearchBar setSearch={getTerm} />
      <BooksListPage searchFor={search} />
    </div>
  );
}

export default App;
