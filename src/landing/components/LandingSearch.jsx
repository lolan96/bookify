import react, {useState} from "react";
import InputUnstyled from '@mui/base/InputUnstyled';

// function LandingSearch(props) {
//     return <InputUnstyled />;

// };
function LandingSearch({setSearch}) {
  const [value, setValue] = useState("")

    function handleChange(event) {
      setValue(event.target.value);
    }
  
   function handleSubmit(event) {
      event.preventDefault();
      setSearch(value)
    }

    
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Search
             <input type="text" value={value} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    };

export default LandingSearch;