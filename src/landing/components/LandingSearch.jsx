import styled from "styled-components";
import React, { useState } from "react";

const Form = styled.form`
input[type="text"] {
  width: 50%;
  position: relative;
  padding: 15px, 10px;
  border-width: 0.1em;
  border-color: white;
  border-radius: 0.2em;
  text-align: center;
  font-size: 2em;
  font-family: monospace;
  margin-bottom: 1em;
  margin-left: 25%;
  margin-right: 10%;
  
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
input[type="submit"] {
  margin-left: calc(50% - 3em);
  margin-bottom: 6em;
  border-radius: 0.7em;
  border: none;
  width: 6em;
  height: 3em;
  font-family: monospace;
  font-weight: bold;
  color: #fff;
  background-color: #33847F;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #B27B35;
  }
`;

function LandingSearch({ setSearch }) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearch(value);
  }
  return (
    <Form onSubmit={handleSubmit} className="search">
      <label>
        <input
          type="text"
          value={value}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="search" className="submitButton" />
    </Form>
  );
}
export default LandingSearch;
