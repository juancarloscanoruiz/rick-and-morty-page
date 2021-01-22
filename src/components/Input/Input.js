import React from "react";

//Images
import SearchIcon from "../../assets/images/search-icon.svg"

export default function Input({ placeholder, onChange }){
    return (
        <div className="d-flex align-items-center search-field mb-3 ml-2 mr-2 pt-3 pb-3 pl-3 pr-3">
            <img src={SearchIcon} alt="Search"/>
            <input type="text" className="ml-2 text-normal search-field__input text-regular-medium-neutral1" placeholder={placeholder} onChange={(e) => onChange(e)} />
        </div>
    )
}