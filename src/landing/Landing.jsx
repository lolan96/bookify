import React, {useState} from "react";
import LandingSearch from "./components/LandingSearch";
import Results from "./components/Results";
import Header from "./components/Header";

function Landing() {
  const [search, setSearch] = useState("");
  
  return (
    <div>
      <Header/>
     <LandingSearch
       setSearch={setSearch}
       />
     <Results 
      search = {search} />
    </div>
  )
};

export default Landing;