


function Book({bookdata}) { 
  console.log(bookdata);


  return (<div><p>{bookdata.title} </p>
  <p>{bookdata.authors[0]}</p>
 <img src= {bookdata.imageLinks.smallThumbnail} alt = {bookdata.title}/>
 </div>
 )
}

export default Book;