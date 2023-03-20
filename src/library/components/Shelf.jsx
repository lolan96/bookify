import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import Book from "./Book";

const Container = styled.div`
  margin: 8px;
  border-bottom: 5px solid black;
  border-radius: 2px;
  background-color: white;
`;

const Title = styled.h3`
  padding-left: 8px;
  font-family: arial;
`;

const BookList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isDraggingOver ? "lightgrey" : "inherit"};
  min-height: 120px;

  display: flex;
  overflow: "auto";
`;



const Shelf = ({ shelf, index }) => {
  const handleDraggableProps = provided => {
    return {
      ...provided.draggableProps,
      ref: provided.innerRef,
    };
  };

  const handleDroppableProps = (provided, snapshot) => {
    return {
      ...provided.droppableProps,
      ref: provided.innerRef,
      isDraggingOver: snapshot.isDraggingOver,
    };
  };

  return (
    <Draggable draggableId={shelf.id} index={index}>
      {provided => (
        <Container {...handleDraggableProps(provided)}>
          <Title {...provided.dragHandleProps}>{shelf.title}</Title>
          <Droppable droppableId={shelf.id} direction="horizontal" type="book">
            {(provided, snapshot) => (
              <BookList {...handleDroppableProps(provided, snapshot)}>
                <Book bookdata={shelf.bookDetails} />
                {provided.placeholder}
              </BookList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
};

export default Shelf;
