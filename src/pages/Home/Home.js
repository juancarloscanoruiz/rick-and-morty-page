import React from "react"

import CardList from "../../components/CardList";

export default function Home() {

  return (
    
    <div className="d-flex justify-content-center container">
      
      <div className="col-10">
        <h1 className="text-get-schwifty-primary h1 text-center mt-5 mb-5">Rick and Morty</h1>
        <CardList />
      </div>
    </div>

  );
}


