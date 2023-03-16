import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Book({bookdata}) { 
  console.log(bookdata);

function save() {
  localStorage.setItem("bookdata", JSON.stringify(bookdata));
}

  return (<div><p>{bookdata.title} </p>
  <p>{bookdata.authors[0]}</p>
  <FontAwesomeIcon icon={faPlus} onClick ={save}/>
 <img src= {bookdata.imageLinks.smallThumbnail} alt = {bookdata.title}/>
 </div>
 )
}

export default Book;