import styled from 'styled-components'
import GoogleBooksAPI from "./GoogleBooksAPI";
import React, { useEffect, useState, useRef } from "react";
import Book from "./Book";

const DIV = styled.div`
background-image: radial-gradient(circle, #057065 0%, #053c52 28%, #0a3d57 32%, #0b2557 100% );`

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
    <DIV ref={scrollRef}>
      {result
        ? result.map(bookdata => {
            return <Book bookdata={bookdata.volumeInfo} />;
          })
        : ""}
    </DIV>
  );
}

export default Results;
