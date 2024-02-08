import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import icon from '../assets/appIcon.png';
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
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon color='secondary'/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src={icon} style={{display: isMobile ? 'none': 'block'}} alt="icon" className="logo" />
        </Typography>
        <Button sx={{display: isMobile ? 'none': 'block', textShadow:'2px 2px 4px rgba(0, 0, 0, 1)'}} color='secondary'>Accueil</Button>
        <Button sx={{display: isMobile ? 'none': 'block', textShadow:'2px 2px 4px rgba(0, 0, 0, 1)'}} color='secondary'>Suivie</Button>
      </Toolbar>
    </AppBar>
  </Box>
  );
}

