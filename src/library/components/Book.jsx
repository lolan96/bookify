
function Book({bookdata}) { 
  console.log(bookdata);
  return (<div>
     <img src= {bookdata.imageLinks.smallThumbnail} alt = {bookdata.title}/>
    </div>
 )
}

export default Book;