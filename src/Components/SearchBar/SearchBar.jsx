import { useState } from "react";
import style from "./SearchBar.module.css";

export function SearchBar({ setSearch }) {
  const [type, setType] = useState("");

  function click(e) {
    setType(e.target.value);
    setSearch(e.target.value);
  }

  return (
    <div className={style.searchBar}>
      <p>Search</p>
      <div className={style.inputArea}>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input
          className={style.inputSearch}
          type="text"
          placeholder="type to search..."
          value={type}
          onChange={click}
        />
      </div>
    </div>
  );
}
