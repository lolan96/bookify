import React, { useEffect, useState } from "react";
import Book from "./Book";

function Shelf({  }) {
  const [result, setResult] = useState();
  useEffect(() => {
    const libraryBook = JSON.parse(localStorage.getItem("items"));
    setResult(libraryBook);

  }, []);
  return (
    <div>
      {result
        ? result.map((bookdata) => {
            return <Book bookdata={bookdata} />;
          })
        : ""}
    </div>
  );
}

export default Shelf;