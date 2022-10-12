import * as React from 'react';
import { Card,CardContent,Typography,Box,Link } from "@mui/material";
// import { useNavigation } from '@react-navigation/native';    

function PokemonCard({item}) {

    

    const CardStyle = {
        width: 275,
        height:300,
        margin:"8px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        cursor:"pointer"
    }

    console.log(item.data.sprites.other.dream_world.front_default);

    return (
        <Link href={`/pokemon/${item.data.id}`} sx={{textDecoration:"none"}}>
            <Card sx={CardStyle} >
                <CardContent>
                    <img style={{width:"150px",height:"150px",marginBottom:"10px"}} src={item.data.sprites.other.dream_world.front_default} alt="" />
                    <Box sx={{display:"flex"}}>
                        <Typography sx={{ fontSize: 14 }} color="#000" gutterBottom>
                            {item.data.abilities[0].ability.name}
                        </Typography>
                    </Box>
                        <Typography sx={{ fontSize: 44 }} color="text.secondary" gutterBottom>
                            {item.data.name}
                        </Typography>
                </CardContent>  
            </Card>
        </Link>
       
    )
}

export default PokemonCard