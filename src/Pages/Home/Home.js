import { Box,TextField } from "@mui/material"
import { useEffect, useState } from "react";
import Pokemon   from "../../Axios/axios";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";

function Home() {
    const [allResults,setAllResults] = useState([])
    const [pokemons,setPokemons] = useState([])
    const [searchVal,setSearchVal] = useState("")
    const [searchedPokemons,setSearchedPokemons] = useState([])
    let pokemonss = []
    useEffect(()=> {
        Pokemon.get("pokemon?limit=60").then((response) => {
            setAllResults(response.data.results);
        });
      
    },[])

    useEffect(()=> {
        allResults.map(item => {
            Pokemon.get(`pokemon/${item.name}`).then((response) => {
                setPokemons(current => [...current,response]);
            });
        }) 
        console.log(allResults);
    },[allResults])

    useEffect(()=> {
        const Filtred = pokemons.slice(0,50).filter(item => item.data.name.toLowerCase().includes(searchVal.toLowerCase()))
        setSearchedPokemons(Filtred);
    },[searchVal])

    console.log(pokemonss);

    return (
        <Box sx={{maxWidth:"1200px",margin:"0 auto",padding:"50px 0"}}>
            <TextField onChange={(e)=> setSearchVal(e.target.value)} sx={{width:"50%",margin:"10px"}} label="Search"/>
            <Box sx={{display:"flex",flexFlow: "wrap"}}>
                {
               
                    (pokemons.length > 0 && searchedPokemons.length < 1 && !searchVal ? 
                    pokemons.slice(0,50).map((item,index) => (
                        <PokemonCard item={item}  key={index}/>
                    )):  searchedPokemons.map((item,index) => (
                        <PokemonCard item={item}  key={index}/>
                    )))
                }
            </Box>
        </Box>
    )
}

export default Home
