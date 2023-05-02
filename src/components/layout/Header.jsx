import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import { useState } from "react";
const Header = () => {
  // nav links
  const navLinks = [
    { to: "/", link: "Home" },
    { to: "/about", link: "About" },
    { to: "/contact", link: "Contact" },
    { to: "/menu", link: "Menu" },
  ];
  // 
  // menu toggle state
  const [mobileMenu, setMobileMenu] = useState(false);
  // 
  // menu toggle function
  const handleDrawerToggle = () => {
    setMobileMenu(!mobileMenu);
  };
  // 
  // declaring drawer function that return the elements that we want to show in Drawer component
  const drawer = (
    <Box>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, textAlign:"center",my:2 }}
      >
        <FastfoodIcon />
        My Restruant
      </Typography>
      <Divider/>
      <ul className="mobile_menu">
        {navLinks.map((item) => (
          <li>
            <NavLink to={item.to}>{item.link}</NavLink>
          </li>
        ))}
      </ul>
    </Box>
  );
  // 
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* desktop navigation */}
      <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color={"goldenrod"}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <FastfoodIcon />
            My Restruant
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation_menu">
              {navLinks.map((item) => (
                <li>
                  <NavLink to={item.to}>{item.link}</NavLink>
                </li>
              ))}
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      {/*  */}
      {/* calling drawer mui inbuilt component  for mobile menu*/}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileMenu}
          onClose={handleDrawerToggle}
          sx={{
            display: { sm: "none", xs: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/*  */}
      {/* added self closing toolbar for showing content of page, wrapped toolbar inside box for spacing */}
      <Box>
      <Toolbar/>
      </Box>
      {/*  */}
    </Box>
  );
};

export default Header;
