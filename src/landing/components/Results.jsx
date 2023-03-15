import LandingSearch from "./LandingSearch";
import GoogleBooksAPI from "./GoogleBooksAPI";
import React, { useEffect } from "react";

function Results({search}) {
    useEffect(()=> {
       if (search !==""){
        GoogleBooksAPI.search(search).then(res=>{
             console.log(res)
            })
        } 
    }, [search]);
    return <div> results 

    </div>
}

export default Results