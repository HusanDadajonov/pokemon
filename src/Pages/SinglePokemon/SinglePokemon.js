import { Box,Card,Button,Stack, Link } from '@mui/material';
import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import Pokemon from '../../Axios/axios';

function SinglePokemon() {
    const [pokemon,setPokemon] = useState({})
    let { id } = useParams();
    const [pokemonId,setPokemonId] = useState(id)
 

    useEffect(()=> {
        Pokemon.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then((response) => {
            setPokemon(response.data)
        });
    },[pokemonId,id])

    useEffect(()=> {
      if(pokemonId <= 1){
        setPokemonId(1)
      }
    },[pokemonId,id])

    return (
        <Box sx={{maxWidth:"1200px",margin:"0 auto",padding:"50px 0"}}>
            <Stack spacing={2} direction="row">
                <Link href="/">
                    <Button variant="outlined" sx={{padding:"10px 50px"}}>main</Button>
                </Link>
            </Stack>
            {
                pokemon ? 
                    <Box sx={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                        <img style={{width:"300px",height:"300px"}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="" />
                        <h2 style={{fontSize:"30px",margin:"0 0 5px 0"}}>Name: {pokemon.name}</h2>
                        <h2 style={{fontSize:"30px",margin:"0 0 5px 0"}} >Id:{pokemon.id}</h2>
                        <h2 style={{fontSize:"30px",margin:"0 0 5px 0"}} >Weight:{pokemon.weight}</h2>
                        <h2 style={{fontSize:"30px",margin:"0 0 50px 0"}} >Height:{pokemon.height}</h2>
                        <Stack spacing={2} direction="row">
                            <Link href={`/pokemon/${pokemonId}`}>
                                <Button onClick={()=> setPokemonId(+pokemonId - 1)} variant="outlined" sx={{padding:"10px 50px"}}>Previous</Button>
                            </Link>
                            <Link href={`/pokemon/${pokemonId}`}>
                                <Button onClick={()=> setPokemonId(+pokemonId + 1)} sx={{padding:"10px 50px"}} variant="outlined">next</Button>
                            </Link>
                
                        </Stack>
                    </Box>
                : null
            }
            
            
        </Box>
    )
}

export default SinglePokemon
