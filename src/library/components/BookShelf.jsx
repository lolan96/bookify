import React, { useState } from 'react';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import initialData from './initial-data';
import Shelf from './Shelf';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  padding: 8px;
`;

function InnerList({ shelf, bookMap, index }) {
  const books = shelf.bookIds.map(bookId => bookMap[bookId]);
  return <Shelf shelf={shelf} books={books} index={index} />;
}

export default function Bookshelf() {
  const [state, setState] = useState(initialData);

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    };

    if (type === 'shelf') {
      const newShelfOrder = Array.from(state.shelfOrder);
      newShelfOrder.splice(source.index, 1);
      newShelfOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...state,
        shelfOrder: newShelfOrder,
      };
      setState(newState);
      return;
    };

    const start = state.shelves[source.droppableId];
    const finish = state.shelves[destination.droppableId];

    if (start === finish) {
      const newBookIds = Array.from(start.bookIds);
      newBookIds.splice(source.index, 1);
      newBookIds.splice(destination.index, 0, draggableId);

      const newShelf = {
        ...start,
        bookIds: newBookIds,
      };

      const newState = {
        ...state,
        shelves: {
          ...state.shelves,
          [newShelf.id]: newShelf,
        },
      };

      setState(newState);
      return;
    };

    // moving from one list to another
    const startBookIds = Array.from(start.bookIds);
    startBookIds.splice(source.index, 1);
    const newStart = {
      ...start,
      bookIds: startBookIds,
    };

    const finishBookIds = Array.from(finish.bookIds);
    finishBookIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      bookIds: finishBookIds,
    };

    const newState = {
      ...state,
      shelves: {
        ...state.shelves,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} >
      <Droppable 
        droppableId="bookshelf" 
        direction="vertical" 
        type="shelf"
      >
      {(provided) => (
        <Container
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {state.shelfOrder.map((shelfId, index) => {
            const shelf = state.shelves[shelfId];

            return (
              <InnerList 
                key={shelf.id} 
                shelf={shelf}  
                bookMap={state.books} 
                index={index}
              />
            );
          })}
          {provided.placeholder}
        </Container>
      )}
      </Droppable>
    </DragDropContext>
  );
};
