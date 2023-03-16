import LandingSearch from "./LandingSearch";
import GoogleBooksAPI from "./GoogleBooksAPI";
import React, { Component, useEffect, useState } from "react";
import Book from "./Book";

function Results({ search }) {
  const [result, setResult] = useState();
  useEffect(() => {
    if (search !== "") {
      GoogleBooksAPI.search(search).then(({ data }) => {
        console.log(data);
        setResult(data.items);
      });
    }
  }, [search]);
  return (
    <div>
      {result
        ? result.map((bookdata) => {
            return <Book bookdata={bookdata.volumeInfo} />;
          })
        : ""}
    </div>
  );
}

export default Results;
