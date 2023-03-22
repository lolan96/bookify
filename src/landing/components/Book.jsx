import styled from 'styled-components'
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import initialData from "../../library/components/initial-data";


const DIV = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
border-radius: 10px;

float: left;
margin: 0 10px 10px;
padding: 30px 5px 20px;
box-sizing: border-box;
width: 180px;


>img {
  border-radius: 10px;
  padding: 0 20px 20px;
}

>p {
 
}

`



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
    <DIV>
      <img src={bookdata.imageLinks.smallThumbnail} alt={bookdata.title} />
      <p>{bookdata.title} </p>
      <p>{bookdata.authors[0]}</p>
      <Tooltip title="Add to My Library" onClick={save}>
        <IconButton>
          <AddIcon />
        </IconButton>
      </Tooltip>

    </DIV>
  );
}

export default Book;
