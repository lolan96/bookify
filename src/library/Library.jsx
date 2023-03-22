import { DragDropContext } from "@hello-pangea/dnd";
import React from "react";
import Bookshelf from "./components/BookShelf";

function Library() {
  return (
    <div>
      <DragDropContext>
        <Bookshelf />
      </DragDropContext>
    </div>
  );
}

export default Library;
