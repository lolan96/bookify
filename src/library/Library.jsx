import { DragDropContext } from "@hello-pangea/dnd";
import React from "react";
import Bookshelf from "./components/Bookshelf";
import NavLibrary from "./components/NavLibrary";
import Header from "./components/Header";

function Library(){
  return (
    <div>
    <Header />
    <NavLibrary />
    <DragDropContext>
       <Bookshelf />
    </DragDropContext>
  </div>
  )
}

export default Library;