import React, { useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import initialData from "./initial-data";
import Shelf from "./Shelf";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  padding: 8px;
`;

export default function Bookshelf() {
  const initialInput = initialData.savedShelves;
  const existingItems =
    JSON.parse(localStorage.getItem("items")) || initialInput;
  const [state, setState] = useState(existingItems);
  console.log(state);
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };
  /**
   * Moves an item from one list to another list.
   */
   const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
  
    destClone.splice(droppableDestination.index, 0, removed);
  
    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
  
    return result;
  };

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      console.log(state)
      console.log(sInd)
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setState(newState.filter(group => group.length));
    }
  }

  
  

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {state.map((shelf, index) => (
      <Droppable droppableId={index+""} direction="vertical" type="shelf">
        {provided => (
          <Container {...provided.droppableProps} ref={provided.innerRef}>
               <Shelf shelf={shelf} index={index}/>
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
      ))}
    </DragDropContext>
  );
}
