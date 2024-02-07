import { render } from 'preact';
import './style.css';
import { Box, Button, ThemeProvider, Typography, createTheme } from '@mui/material';
import { purple } from '@mui/material/colors';
import { NavMenu } from './components/menu';
import AppIcon from './assets/appIcon.png';

let theme = createTheme({

});

theme = createTheme(theme, {
	palette: {
	  secondary: theme.palette.augmentColor ({
		color: {
			main: '#ED017A',
		},
		name: 'purpleButton'
	  })
	},
  });

function TitleApp(){
	return (
		<Box sx={{display: 'flex', justifyContent:'center', alignItems: 'center', marginTop:10}}>
			<img src={AppIcon} style={{margin:'-50px'}} alt="logo"/>
			<Box sx={{display: 'flex', flexDirection: 'column', textAlign: 'center', marginTop:5}}>
				<Typography variant="h1">
					MENSTRUFYC
				</Typography>
				<Typography variant="subtitle1" gutterBottom>
					En phase avec votre cycle, en contrôle de votre vie.
				</Typography>
				<Box>
					<Button variant="contained" size="medium" color='secondary'>Découvrir</Button>
				</Box>
			</Box>
		</Box>
	);
};


export function App() {
	return (

		<ThemeProvider theme={theme}>
			<div class="app-container">
				<div class="app-half-first">
					<NavMenu />
					<TitleApp />
				</div>
				<div class="app-half-second">
				</div>
			</div>
		</ThemeProvider>
	);
}

render(<App />, document.getElementById('app'));
