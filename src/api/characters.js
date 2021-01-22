import axios from "axios";

export function getAllCharacters(){
    return axios.get("https://rickandmortyapi.com/api/character/")
}

export function getCharacter(id){
    return axios.get(`https://rickandmortyapi.com/api/character/${id}`)

}