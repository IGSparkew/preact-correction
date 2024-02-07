import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import icon from '../assets/appIcon.png';
import { CssBaseline, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const pages = ['Pricing', 'Blog'];
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export function NavMenu(props) {


  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" style={{backgroundColor: 'transparent'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src={icon} alt="icon" className="logo" />
        </Typography>
        <Button color="inherit">Accueil</Button>
        <Button color="inherit">Suivie</Button>
      </Toolbar>
    </AppBar>
  </Box>
  );
}

