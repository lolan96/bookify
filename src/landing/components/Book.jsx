import AddCircleIcon from "@mui/icons-material/AddCircle";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import initialData from "../../library/components/initial-data";
import "../Landing.css";

function Book({ bookdata }) {
  console.log(bookdata);
  // function that creates random number between 1 and million
  // const newId = `"${bookdata.industryidentifiers[0]}"`+ random number
  // parseint whole thing
  // id: newId

  function save() {
    const initialInput = initialData.savedShelves;
    const existingItems =
      JSON.parse(localStorage.getItem("items")) || initialInput;
    const newlySavedShelf = [...existingItems[0].bookDetails];
    newlySavedShelf.push({
      id: bookdata.industryIdentifiers[0],
      title: bookdata.title,
      author: bookdata.authors[0],
      image: bookdata?.imageLinks?.smallThumbnail,
    });
    existingItems[0].bookDetails = newlySavedShelf;
    localStorage.setItem("items", JSON.stringify(existingItems));
  }
  return (
    <div className="landingBook">
      <div className="landingBookImage">
        <img src={bookdata.imageLinks.smallThumbnail} alt={bookdata.title} />
      </div>
      <p className="bookTitle">{bookdata.title} </p>
      <p className="bookAuthor">{bookdata.authors[0]}</p>
      <Tooltip title="Add to My Library" onClick={save}>
        <IconButton>
          <AddCircleIcon className="circleIcon" />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default Book;
