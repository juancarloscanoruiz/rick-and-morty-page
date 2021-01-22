import React, { useState, useEffect } from "react";

//Components
import Card from "../Card";
import SearchField from "../Input";

//API
import { getAllCharacters } from "../../api/characters";


export default function CardList(){

    const [characters, setCharacters] = useState([]);
    const [searchField, setSearchField] = useState("");

    useEffect(() => {
        const response = getAllCharacters();
        response.then((result) => {
          setCharacters(result.data.results);
        })
      }, [])

    const filteredCharacters = characters.filter(character => character.name.toLowerCase().includes(searchField.toLowerCase()))

    const handleChange = (e) => {
        setSearchField(e.target.value);
        
    }

    return(
        <>
            <SearchField placeholder="Search a character" onChange={handleChange} />
            <div className="d-flex flex-wrap">
                {filteredCharacters.map((character) => <Card character={character}/>)}
            </div>
        </>
    )
}
