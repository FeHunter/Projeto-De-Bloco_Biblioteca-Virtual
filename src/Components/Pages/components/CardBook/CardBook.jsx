import style from "./CardBook.module.css";

export function CardBook({ book }) {
  return (
    <div className={style.book}>
      <h2>{book.title}</h2>
      <img src={book.cover} className={style.imageCover} />
      <div className={style.infos}>
        <span className={style.aboutTexts}>
          <p>
            <span className={style.highlight}>Author:</span> <br />
            {book.author}
          </p>
          <p>
            <span className={style.highlight}>Synopsis:</span> <br />
            {book.synopsis}
          </p>
          <p>
            <span className={style.highlight}>Genre:</span> <br />
            {book.genre}
          </p>
        </span>
        <span className={style.aboutNumbers}>
          <p>
            <span className={style.highlight}>Rating:</span> {book.rating} / 5
          </p>
          <p>
            <span className={style.highlight}>Pages:</span> {book.pages}
          </p>
          <p>
            <span className={style.highlight}>Price:</span> ${book.price}
          </p>
        </span>
      </div>
    </div>
  );
}
