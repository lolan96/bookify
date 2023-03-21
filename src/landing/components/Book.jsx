import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import initialData from "../../library/components/initial-data";

function Book({ bookdata }) {
  console.log(bookdata);

  //function save() {
  //  localStorage.setItem("bookdata", JSON.stringify(bookdata));
  //}
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
    <div>
      <p>{bookdata.title} </p>
      <p>{bookdata.authors[0]}</p>
      <Tooltip title="Add to My Library" onClick={save}>
        <IconButton>
          <AddIcon />
        </IconButton>
      </Tooltip>
      <img src={bookdata.imageLinks.smallThumbnail} alt={bookdata.title} />
    </div>
  );
}

export default Book;
