import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { AxiosResponse } from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { PokemonDetailsResponse } from "../models/responses/PokemonDetailsResponse.interface";
import { getPokeDetails } from "../services/PokeService.services";

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] =
    React.useState<PokemonDetailsResponse | null>(null);

  React.useEffect(() => {
    getPokeDetails(+id!).then((response: AxiosResponse) => {
      setPokemonDetails(response.data as PokemonDetailsResponse);
    });
  }, []);
  return (
    <>
      <head>
        <title>Pokemon Details</title>
      </head>
      <Layout>
        <Card
          variant="outlined"
          className="detailCard"
          sx={{
            maxWidth: 500,
            border: "2px solid primary",
          }}
        >
          <Box display="flex">
            <CardMedia
              component="img"
              height="200"
              image={`${pokemonDetails?.sprites.back_shiny}`}
              alt=""
            />
            <CardMedia
              component="img"
              height="200"
              image={`${pokemonDetails?.sprites.front_shiny}`}
              alt=""
            />
          </Box>
          <CardContent>
            <Box className="box" sx={{ alignItems: "center" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textTransform: "capitalize" }}
              >
                {pokemonDetails?.name}
              </Typography>
            </Box>
            <Box
              className="box"
              component="span"
              sx={{
                p: 2,
                border: "2px solid gray",
                alignItems: "center",
                marginTop: 8,
                marginBottom: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography gutterBottom variant="h5" color="text.primary">
                Types
              </Typography>
              <Box
                className="box"
                component="span"
                sx={{
                  p: 2,
                  border: "2px solid gray",
                  alignItems: "center",

                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {pokemonDetails?.types.map((res) => (
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="text.secondary"
                    sx={{ textTransform: "capitalize" }}
                  >
                    {res.type.name}
                  </Typography>
                ))}
              </Box>
            </Box>
          </CardContent>
        </Card>

        <br />
      </Layout>
    </>
  );
};
export default PokemonDetails;
