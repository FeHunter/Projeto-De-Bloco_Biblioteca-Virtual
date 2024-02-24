import style from "./BookList.module.css";

export function BookList({ children }) {
  return <div className={style.bookList}>{children}</div>;
}
