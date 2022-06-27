import { Box, Typography, Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../../assets/images/PokemonLogo.png";
const Footer = () => {
  return (
    <div className="components">
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <img src={logo} alt=" " width="230px" />
          </Grid>

          <Grid item xs={4}>
            <Typography align="center" className="typography_title">
              About
            </Typography>
            <Typography align="center" className="typography_body">
              Pokémonis a Japanese media franchise managed by The Pokémon
              Company, a company founded by Nintendo, Game Freak, and Creatures.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography align="center" className="typography_title">
              Contacts
            </Typography>

            <Typography align="center" className="typography_body">
              <EmailIcon /> xxxxx@xxxxx.com
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              align="center"
              variant="body2"
              gutterBottom
              className="typography_body"
            >
              Copyrighted &copy; by Emre Şahin
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Footer;
