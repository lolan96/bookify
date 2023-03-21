import { DragDropContext } from "@hello-pangea/dnd";
import React from "react";
import Bookshelf from "./components/BookShelf";
// import NavLibrary from "./components/NavLibrary";


function Library(){
  return (
    <div>

    <DragDropContext>
       <Bookshelf />
    </DragDropContext>
  </div>
  )
}

export default Library;