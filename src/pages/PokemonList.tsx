import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { AxiosResponse } from "axios";
import React from "react";
import Layout from "../components/layout/Layout";
import { PokeListResponse } from "../models/responses/PokeListResponse.interface";
import { getPokeList } from "../services/PokeService.services";
import PokemonCard from "../assets/images/PokemonCard.png";
import { Link } from "react-router-dom";

const PokemonList = () => {
  const [pokeList, setPokeList] = React.useState<PokeListResponse[]>([]);
  // const headerCard = <img alt="Card" src={Pokeball} className="w-5 mt-5"></img>;

  React.useEffect(() => {
    getPokeList().then((response: AxiosResponse) => {
      setPokeList(response.data.results as PokeListResponse[]);
    });
  }, []);

  return (
    <>
      <head>
        <title>Pokemon List</title>
      </head>
      <Layout>
        <Container sx={{ mt: 2 }}>
          <h1 className="cardText"> Pokemon Details</h1>
          <Grid container spacing={2}>
            {pokeList.map((pokemon, index) => {
              return (
                <Grid item xs={4} key={index}>
                  <Link
                    to={`/pokemon-details/${index + 1}`}
                    className="buttons"
                  >
                    <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={PokemonCard}
                          alt={pokemon.name}
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ textTransform: "capitalize" }}
                          >
                            {pokemon.name}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Container>

        <br />
      </Layout>
    </>
  );
};
export default PokemonList;
