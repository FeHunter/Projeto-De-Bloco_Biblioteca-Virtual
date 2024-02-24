// Link da API: https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json

import { useState, useEffect } from "react";
import { CardBook } from "../components/CardBook/CardBook";
import style from "./BooksListPage.module.css";
import { BookList } from "../components/BookList/BookList";

export function BooksListPage({ searchFor }) {
  const [book, setBook] = useState([]);

  const url = "https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com";
  const resource = "/books.json";

  useEffect(() => {
    fetch(url + resource)
      .then((res) => res.json())
      .then((res) => {
        setBook(convertData(res));
      });
  }, []);

  function convertData(data) {
    const ids = Object.keys(data);
    const objs = Object.values(data);
    return objs.map((obj, i) => {
      return { id: ids[i], ...obj };
    });
  }

  function FilterBooks() {
    let updateList = [...book];
    updateList = updateList.filter((book) => {
      return book.title.toLowerCase().includes(searchFor.toLowerCase())
      || book.author.toLowerCase().includes(searchFor.toLowerCase())
      || book.genre.toLowerCase().includes(searchFor.toLowerCase());
    });
    return updateList.map((book, index) => {
      return <CardBook key={index} book={book} />;
    });
  }

  let showBooks =
    book.length > 0 && searchFor.length === 0
      ? book.map((book, index) => {
          return <CardBook key={index} book={book} />;
        })
      : FilterBooks();

  return (
    <div className={style.container}>
      <h1>Lista de livros</h1>
      <BookList>{showBooks}</BookList>
    </div>
  );
}
