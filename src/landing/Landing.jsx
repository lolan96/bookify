import React, {useState} from "react";
import LandingSearch from "./components/LandingSearch";
import Results from "./components/Results";

function Landing() {
  const [search, setSearch] = useState("");
  return (
    <div>
     <LandingSearch
       setSearch={setSearch}/>
     <Results search = {search}/>
    </div>
  )
};

export default Landing;