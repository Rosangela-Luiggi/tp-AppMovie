import LocalMoviesTwoToneIcon from "@mui/icons-material/LocalMoviesTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Button,
  Menu,
  Container,
  MenuItem,
} from "@mui/material";
import * as React from "react";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";

const pages = ["upcoming", "popular",];

const color = grey[900];
export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: color }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <LocalMoviesTwoToneIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              AppMovie
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`category/${page}`} style={{ textDecoration: "none" }}>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>

              ))}
              <Link to={`/search`} style={{ textDecoration: "none" }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"> Search</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <LocalMoviesTwoToneIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              AppMovie
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to={`/`} style={{ textDecoration: "none" }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Home
              </Button>
            </Link>
            {pages.map((page) => (
              <Link to={`/category/${page}`} key={page} style={{ textDecoration: "none" }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
            <Link to={`/search`} style={{ textDecoration: "none" }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Search
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
