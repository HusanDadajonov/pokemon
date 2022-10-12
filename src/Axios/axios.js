import axios from "axios";

const Pokemon = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})

export default Pokemon; 