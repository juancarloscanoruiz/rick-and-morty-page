import React from "react";
import { Link } from "react-router-dom";

export default function Card ({ character }){
    return (
        <div className="col-12 col-md-12 col-lg-12 col-xl-6 ">
            <Link className="text-decoration-none" to={`/character/${character.id}`}>
                <div className="card mb-3 p-3">
                    <div className="card__line"></div>
                    <div className="d-flex">
                        <div className="d-flex align-items-center mr-3">
                            <img src={character.image} alt="Character" className="card__image"/>
                        </div>
                        <div>
                            <h4 className="h4 text-poppins-bold-primary">{character.name}</h4>
                            <p className="mb-2 text-poppins-regular-neutral1 text-small">{character.status} - {character.species}</p>

                            <p className="mb-1 text-small text-poppins-regular-neutral1"><span className="text-small text-poppins-regular-neutral3">Gender:</span> {character.gender}</p>
        
                            <p className="d-none d-md-block mb-1 text-small text-poppins-regular-neutral1"><span className="text-small text-poppins-regular-neutral3">First seen:</span> {character.origin.name}</p>
                            <p className="d-none d-md-block text-small text-poppins-regular-neutral1"><span className="text-small text-poppins-regular-neutral3">Last known location:</span> {character.location.name}</p>
                        
                        </div>
                    </div>
                </div>
            </Link>
        </div>


    )
}