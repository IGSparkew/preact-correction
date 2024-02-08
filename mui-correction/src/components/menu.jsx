import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import icon from '../assets/appIcon.png';

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

