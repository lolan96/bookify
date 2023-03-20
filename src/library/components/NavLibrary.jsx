import styled from "styled-components";
import React, {useState} from "react";
import { BrowserRouter as Routes, Route } from 'react-router-dom';


const Container = styled.form`
  border-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backgroun-color: blue;
`

function NavLibrary({setSearch}) {
  const [value, setValue] = useState("")

    function handleChange(event) {
      setValue(event.target.value);
    }
  
   function handleSubmit(event) {
      event.preventDefault();
      setSearch(value);
    }

    return (
        <Container>
        <button>
            Back
        </button>
        <form onSubmit={handleSubmit}>
          <label>
            Search
             <input type="text" value={value} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </Container>
      );
    };


export default NavLibrary;


