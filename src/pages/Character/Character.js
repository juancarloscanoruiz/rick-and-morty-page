import React, { useState, useEffect } from "react";

//API
import { getCharacter } from "../../api/characters"

export default function Character(props){

    const [characterInfo, setCharacterInfo] = useState("");

    
    useEffect(() => {
        const characterId = props.match.params.id;
        const response = getCharacter(characterId);
        response.then((result) => {
            setCharacterInfo(result.data);
        })
    }, [])

    return (
        <div className="d-flex justify-content-center mt-5 mb-5">
            <div className="container-character col-10 col-md-7 col-lg-6 col-xl-10 p-3">
                <div className="d-flex flex-wrap">
                    <div className="col-12 col-xl-4">
                        <img className="container-character__image" src={characterInfo.image} alt={characterInfo.image}/>
                    </div>
                    <div className="col-12 col-xl-8">
                        <h4 className="h2 mb-3 text-poppins-bold-primary">{characterInfo.name}</h4>
                        <p className="mb-2 text-normal text-poppins-regular-primary2">Status: <span className="text-poppins-regular-neutral1">{characterInfo.status}</span></p>
                        <p className="mb-2 text-normal text-poppins-regular-primary2">Species: <span className="text-poppins-regular-neutral1">{characterInfo.species}</span></p>
                      
                        <p className="mb-2 text-normal text-poppins-regular-primary2">Gender: <span className="text-poppins-regular-neutral1">{characterInfo.gender}</span></p>
                
                        {<p className="mb-2 text-normal text-poppins-regular-primary2">Origin: <span className="text-poppins-regular-neutral1">{characterInfo.origin ? characterInfo.origin.name : ""}</span></p>}
                        <p className="mb-2 text-normal text-poppins-regular-primary2">Location: <span className="text-poppins-regular-neutral1">{characterInfo.location ? characterInfo.location.name : ""}</span></p>
                        <p className="mb-2 text-normal text-poppins-regular-primary2">Created at: <span className="text-poppins-regular-neutral1">{characterInfo.created}</span></p>
                        <p className="text-normal text-poppins-regular-primary2 d-none d-md-block">Url: <span className="text-poppins-regular-neutral1">{characterInfo.url}</span></p>
            
                    </div>
                </div>
            </div>
        </div>

    )
}