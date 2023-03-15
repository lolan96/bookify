import react, {useState} from "react";
import InputUnstyled from '@mui/base/InputUnstyled';

// function LandingSearch(props) {
//     return <InputUnstyled />;

// };

function LandingSearch() {
   const [value, setValue] = useState(0);

  
    
  
    function handleChange(event) {
      setValue(event.target.value);
    }
  
   function handleSubmit(event) {
      event.preventDefault();
    }
  
     
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={value} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  
  






export default LandingSearch;