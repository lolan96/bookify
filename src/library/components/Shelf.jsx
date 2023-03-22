import React from "react";
import styled from "styled-components";
import { Droppable } from "@hello-pangea/dnd";
import Book from "./Book";
import "../Library.css";

const BookList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? "#B27B35" : "inherit")};
  min-height: 120px;

  display: flex;
  overflow: "auto";
`;

const Shelf = ({ shelf, state, setState }) => {
  const handleDroppableProps = (provided, snapshot) => {
    return {
      ...provided.droppableProps,
      ref: provided.innerRef,
      isDraggingOver: snapshot.isDraggingOver,
    };
  };

  return (
    <div className="shelfContainer">
      <h3 className="shelfTitle">{shelf.title}</h3>
      <Droppable droppableId={shelf.id} direction="horizontal" type="book">
        {(provided, snapshot) => (
          <BookList {...handleDroppableProps(provided, snapshot)}>
            <Book
              bookdata={shelf.bookDetails}
              shelfId={shelf.id}
              state={state}
              setState={setState}
            />
            {provided.placeholder}
          </BookList>
        )}
      </Droppable>
    </div>
  );
};

export default Shelf;
