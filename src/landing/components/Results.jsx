import GoogleBooksAPI from "./GoogleBooksAPI";
import React, { useEffect, useState, useRef } from "react";
import Book from "./Book";
import "../Landing.css";

function Results({ search }) {
  const [result, setResult] = useState();
  const scrollRef = useRef();
  const scrollCallback = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
    console.log("scrollCallback");
  };
  useEffect(() => {
    if (search !== "") {
      GoogleBooksAPI.search(search).then(({ data }) => {
        console.log(data);
        setResult(data.items);
        setTimeout(() => {
          scrollCallback();
        }, 500);
      });
    }
  }, [search]);

  return (
    <div ref={scrollRef}>
      {result
        ? result.map(bookdata => {
            return <Book bookdata={bookdata.volumeInfo} />;
          })
        : ""}
    </div>
  );
}

export default Results;
