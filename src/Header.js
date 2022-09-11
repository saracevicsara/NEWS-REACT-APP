import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FlagButton from "./FlagButton";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const Header = ({ changeLanguage }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SatroLogo
          </Typography>
          <Button color="inherit">
            <Link style={{ color: "white" }} to="/">
              ToDo
            </Link>
            {/* <CustomLink href="/news">News</CustomLink> */}
          </Button>
          <Button color="inherit">
            <Link style={{ color: "white" }} to="/github">
              GitHub
            </Link>
            {/* <CustomLink href="/github">Github</CustomLink> */}
          </Button>
          <Button color="inherit">
            <Link style={{ color: "white" }} to="/news">
              News
            </Link>
            {/* <CustomLink href="/">ToDo</CustomLink> */}
          </Button>
          <Grid item>
            <Grid container>
              <Grid item>
                <FlagButton
                  handleOnClick={() => changeLanguage("German")}
                  imgUrl={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAAB3CAMAAACAEaSBAAAAGFBMVEUAAAD/zgDdAABvAADoAADaAAD0rAD/0QBKKgvJAAAAgUlEQVR4nO3PwQ2DAAwAsVCg7L8xQ/A5RfYGngEAAAAAAACAD84d5tphfjt4tHi0eLR4tHi0eLR4tHi0eLR4tHi0eLR4tHi0eLR4tHi0eLTMvcP8d5hnhzl28GjxaPFo8WjxaPFo8WjxaPFo8WjxaPFo8WjxaPFo8WjxaPFo2fJ4AcVtaoAIiNiLAAAAAElFTkSuQmCC"
                  }
                />
              </Grid>
              <Grid item>
                <FlagButton
                  handleOnClick={() => changeLanguage("English")}
                  imgUrl={
                    "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
