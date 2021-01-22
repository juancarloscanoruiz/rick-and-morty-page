import axios from "axios";

export function getAllCharacters(){
    return axios.get("https://rickandmortyapi.com/documentation/#get-all-characters")
}

export function getCharacter(){

}