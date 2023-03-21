import React from "react";
import styled from "styled-components";
import { Draggable } from "@hello-pangea/dnd";

const Container = styled.div`
  margin-right: 8px;
  background-color: ${props =>
    props.isDragDisabled
      ? "lightgrey"
      : props.isDragging
      ? "lightgreen"
      : "white"};

  font-family: arial;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Book = ({ bookdata, shelfId, state, setState }) => {
  const handleDelete = e => {
    console.log(e.target.dataset);
    const data = e.target.dataset;
    const newState = [...state];
    const shelfIdx = state.findIndex(shelf => shelf.id === data.shelfid);

    const bookDetails = [...state[shelfIdx].bookDetails];
    bookDetails.splice(data.bookindex, 1);
    newState[shelfIdx].bookDetails = bookDetails;
    setState(newState);
    localStorage.setItem("items", JSON.stringify(newState));
  };
  return (
    <>
      {bookdata.map((book, index) => (
        <Draggable
          draggableId={book.id.identifier}
          index={index}
          key={book.id.identifier}>
          {(provided, snapshot) => (
            <Container
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}>
              <img src={book.image} alt={book.title} />
              <button
                data-shelfid={shelfId}
                data-bookindex={index}
                onClick={handleDelete}>
                Delete
              </button>
            </Container>
          )}
        </Draggable>
      ))}
    </>
  );
};

export default Book;
