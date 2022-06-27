import { Button, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/images/PokemonLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Header = () => {
  return (
    <div className="components">
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3}>
            <Link to="/">
              <Button>
                <img src={logo} alt=" " width="230px" />
              </Button>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <nav>
              <Link to="/pokemon-list" className="buttons">
                <Button sx={{ color: "orange" }}>
                  <h3 className="text"> Pokemon Lists </h3>
                </Button>
              </Link>
              <Link to="/about" className="buttons">
                <Button sx={{ color: "purple" }}>
                  <h3 className="text"> About </h3>
                </Button>
              </Link>
              <Button sx={{ color: "red" }}>
                <h3 className="text"> Contact </h3>
              </Button>
            </nav>
          </Grid>
          <Grid item xs={3}></Grid>

          <Grid item xs={3}>
            <Button>
              <SearchIcon color="success" className="right_top_icons" />
            </Button>
            <Link to="/login">
              <Button>
                <PersonOutlineIcon
                  color="warning"
                  className="right_top_icons"
                />
              </Button>
            </Link>
            <Button>
              <NotificationsNoneOutlinedIcon
                color="secondary"
                className="right_top_icons"
              />
            </Button>
            <Button>
              <FavoriteBorderOutlinedIcon
                className="right_top_icons"
                color="error"
              />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Header;
