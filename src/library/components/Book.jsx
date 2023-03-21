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

const Book = ({ bookdata }) => {
  return (
    <>
    {bookdata.map((book, index) => (
    <Draggable draggableId={book.id.identifier} index={index} key={book.id.identifier}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}>
          <img src={book.image} alt={book.title} />
        </Container>
      )}
    </Draggable>
    ))}
    </>
  );
};

export default Book;
