import GoogleBooksAPI from "./GoogleBooksAPI";
import React, { useEffect, useState, useRef } from "react";
import Book from "./Book";
import "../Landing.css";
import Grid from "@mui/material/Grid";

function Results({ search }) {
  const [result, setResult] = useState();
  const scrollRef = useRef();
  const scrollCallback = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (search !== "") {
      GoogleBooksAPI(search).then(({ data }) => {
        setResult(data.items);
        setTimeout(() => {
          scrollCallback();
        }, 500);
      });
    }
  }, [search]);

  return (
    <Grid ref={scrollRef} container justifyContent="center" direction="row">
      {result
        ? result.map(bookdata => {
            return (
              <Grid
                className="results"
                item
                xs={12}
                sm={6}
                md={3}
                lg={2}
                key={bookdata.volumeInfo.industryIdentifiers[0]}>
                <Book bookdata={bookdata.volumeInfo} />
              </Grid>
            );
          })
        : ""}
    </Grid>
  );
}

export default Results;
