import React from "react";
import styled from "styled-components";
import { Draggable } from "@hello-pangea/dnd";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import "../Library.css";

const Container = styled.div`
  margin-right: 8px;
  background-color: ${props =>
    props.isDragDisabled
      ? "#244F55"
      : props.isDragging
      ? "#58835E"
      : "#244F55"};

  position: relative;
`;

const Book = ({ bookdata, shelfId, state, setState }) => {
  const handleDelete = (shelfid, bookindex) => {
    const newState = [...state];
    const shelfIdx = state.findIndex(shelf => shelf.id === shelfid);

    const bookDetails = [...state[shelfIdx].bookDetails];
    bookDetails.splice(bookindex, 1);
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
              <Tooltip
                className="tooltip"
                title="Delete"
                data-shelfid={shelfId}
                data-bookindex={index}
                onClick={e => handleDelete(shelfId, index)}>
                <IconButton>
                  <HighlightOffRoundedIcon className="deleteButton" />
                </IconButton>
              </Tooltip>
            </Container>
          )}
        </Draggable>
      ))}
    </>
  );
};

export default Book;
