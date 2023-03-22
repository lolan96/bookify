import styled from 'styled-components'
import react, { useState } from "react";
// import InputUnstyled from '@mui/base/InputUnstyled';

// function LandingSearch(props) {
//     return <InputUnstyled />;

// };

const Form = styled.form`
input[type="text"] {
  width: 50%;
  position: relative;
  padding: 15px, 10px;
  border: none;
  border-radius: 0.2em;
  text-align: center;
  font-size: 35px;
  font-family: sans-serif;
  margin-bottom: 20px;
  margin-left: 25%;
  margin-right: 25%;
  
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
input[type="submit"] {
  margin-left: 45%;
  margin-bottom: 10%;
  border-radius: 0.7em;
  border: none;
  width: 10%;
  height: 3em;
  font-family: sans-serif;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0062cc;
  }
`


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
    <Form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={value} onChange={handleChange} placeholder="Search"/>
      </label>
      <input type="submit" value="Submit" />
    </Form>
  );
}
export default LandingSearch;
