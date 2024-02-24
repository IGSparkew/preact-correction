import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import icon from '../../assets/appIcon.png';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Menu, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'preact/hooks';

const pages = ['Accueil', 'Suivie'];

export function NavMenu() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorElNav, setAnchorElNav] = useState(null);  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" style={{backgroundColor: 'transparent'}}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <img src={icon} style={{display: isMobile ? 'none': 'block'}} alt="icon" className="logo" />
        </Typography>
        <Button sx={{display: isMobile ? 'none': 'block', textShadow:'2px 2px 4px rgba(0, 0, 0, 1)'}} href='/' color='secondary'>Accueil</Button>
        <Button sx={{display: isMobile ? 'none': 'block', textShadow:'2px 2px 4px rgba(0, 0, 0, 1)'}} href='/monitored' color='secondary'>Suivie</Button>
      </Toolbar>
    </AppBar>
  </Box>
  );
}

