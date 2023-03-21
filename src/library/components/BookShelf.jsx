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
    console.log('rerender');
    const initialInput = initialData.savedShelves;
    const existingItems = JSON.parse(localStorage.getItem("items")) || initialInput;
    const [state, setState] = useState(existingItems);

    const reorder = (shelfIdx, startIndex, endIndex) => {
        const result = [...state[shelfIdx].bookDetails];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };
    /**
     * Moves an item from one list to another list.
     */
    const move = (sourceShelfIdx, destShelfIdx, droppableSource, droppableDestination) => {
        const sourceClone = [...state[sourceShelfIdx].bookDetails];
        const destClone = [...state[destShelfIdx].bookDetails];
        const [removed] = sourceClone.splice(droppableSource.index, 1);

        destClone.splice(droppableDestination.index, 0, removed);

        const result = {
            source: sourceClone,
            dest: destClone,
        };

        return result;
    };

    function onDragEnd(result) {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }
        const sInd = source.droppableId;
        const dInd = destination.droppableId;

        const newState = [...state];
        if (sInd === dInd) {
            const shelfIdx = state.findIndex((shelf) => shelf.id === sInd);
            const items = reorder(shelfIdx, source.index, destination.index);
            newState[shelfIdx].bookDetails = items;
            setState(newState);
            localStorage.setItem("items", JSON.stringify(newState));
        } else {
            const sourceShelfIdx = state.findIndex((shelf) => shelf.id === sInd);
            const destShelfIdx = state.findIndex((shelf) => shelf.id === dInd);
            const result = move(sourceShelfIdx, destShelfIdx, source, destination);

            newState[sourceShelfIdx].bookDetails = result.source;
            newState[destShelfIdx].bookDetails = result.dest;

            setState(newState);
            localStorage.setItem("items", JSON.stringify(newState));
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            {state.map((shelf, index) => (
                <Droppable droppableId={`${index}`} direction="horizontal" type="shelf" key={shelf.id}>
                    {provided => (
                        <Container {...provided.droppableProps} ref={provided.innerRef}>
                            <Shelf shelf={shelf} state={state} setState={setState}/>
                            {provided.placeholder}
                        </Container>
                    )}
                </Droppable>
            ))}
        </DragDropContext>
    );
}
