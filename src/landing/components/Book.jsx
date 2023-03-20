import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import initialData from '../../library/components/initial-data';

function Book({bookdata}) { 
  console.log(bookdata);

//function save() {
//  localStorage.setItem("bookdata", JSON.stringify(bookdata));
//}
function save() {
  const initialInput = initialData.savedShelves
  const existingItems = JSON.parse(localStorage.getItem("items")) || initialInput;
  const newlySavedShelf = [...existingItems[0].bookDetails];
  newlySavedShelf.push({
    title: bookdata.title,
    author: bookdata.authors[0],
    image: bookdata?.imageLinks?.smallThumbnail 
  })
  existingItems[0].bookDetails = newlySavedShelf;
  localStorage.setItem("items", JSON.stringify(existingItems));
}
  return (<div><p>{bookdata.title} </p>
  <p>{bookdata.authors[0]}</p>
  <FontAwesomeIcon icon={faPlus} onClick ={save}/>
 <img src= {bookdata.imageLinks.smallThumbnail} alt = {bookdata.title}/>
 </div>
 )
}

export default Book;