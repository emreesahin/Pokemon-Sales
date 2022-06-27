import Layout from "../components/layout/Layout";
import { Box } from "@mui/system";
import logo from "../assets/images/PokemonWelcome.png";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <head>
        <title>Pokemon Sales</title>
      </head>
      <Layout>
        <Box
          component="span"
          sx={{
            p: 2,
            alignItems: "center",
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img className="welcome-image" src={logo} alt="" />
          <Typography
            className="welcome-text"
            component="h1"
            variant="h2"
            sx={{ marginTop: 8 }}
          >
            Welcome to the Pokemon Sales
          </Typography>
          <Typography
            className="welcome-text"
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: 8 }}
          >
            This is a website that people can sell their pokemons or even trade
            them! If you want to discover more on pokemons, you can click the
            button below!
          </Typography>
          <Link to="/pokemon-list" className="buttons">
            <Button
              variant="contained"
              color="secondary"
              sx={{ marginTop: 8, marginBottom: 9 }}
            >
              Pokemon List
            </Button>
          </Link>
        </Box>
      </Layout>
    </>
  );
};
export default Home;
