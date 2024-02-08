import { render } from 'preact';
import './style.css';
import { Box, Button, ThemeProvider, Typography, createTheme, useMediaQuery, useTheme } from '@mui/material';
import { purple } from '@mui/material/colors';
import { NavMenu } from './components/menu';
import AppIcon from './assets/appIcon.png';
import BlueIcon from './assets/blueIcon.png';
import ImageCycle from './assets/imageCycle.png';

let theme = createTheme({

});

theme = createTheme(theme, {
	palette: {
	  secondary: theme.palette.augmentColor ({
		color: {
			main: '#ED017A',
		},
		name: 'purpleButton'
	  }),
	  primary: theme.palette.augmentColor ({
		color: {
			main: '#6DC9F7',
		},
		name: 'bleuWave'
	  })
	},
  });

function TitleApp(){
	const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Box sx={{display: 'flex', flexWrap:'wrap', justifyContent:'center', alignItems: 'center', marginTop:40, marginBottom:40}}>
			<img src={AppIcon} style={{margin:'-50px'}} alt="logo"/>
			<Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', textAlign: 'center', textShadow:'2px 2px 4px rgba(0, 0, 0, 1)', marginTop:5}}>
				<Typography variant={isMobile ? "h3": "h1"} color='secondary'>
					MENSTRUFYC
				</Typography>
				<Typography variant="h5" color='secondary' sx={{textShadow:'2px 2px 4px rgba(0, 0, 0, 1)'}} gutterBottom>
					En phase avec votre cycle, en contrôle de votre vie.
				</Typography>
				<Box>
					<Button variant="contained" size="medium" color='secondary'>Découvrir</Button>
				</Box>
			</Box>
		</Box>
	);
};

function BottomTitle() {
	return (
		<Box sx={{display: 'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center', marginTop:10}}>
			<img src={BlueIcon} alt="logo blue"/>
			<Typography variant='h4' sx={{whiteSpace:'pre-line', textAlign:'center', WebkitTextStroke:'1px white'}} color="primary">
				{'Si vous souhaitez suivre votre cycle \nmenstruel, vous êtes au bon endroit !'}
			</Typography>
		</Box>
	);
}

function BottomBody() {
	const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return(
		<Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap:'wrap', marginTop:2}}>
			<img 
			src={ImageCycle} 
			style={{
				 width: isMobile ? '50%' : 'none', 
				 height: isMobile ? '50%' : 'none',
				 marginBottom: isMobile ? 10 : 0 
			}} 
			alt='picture cycle'/>
			<Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent: 'center'}}>
				<Typography variant='h3' sx={{whiteSpace:'pre-line', textAlign:'center'}} color="white">
					{"Le suivi des règles est essentiel pour\n comprendre la santé féminine, détecter\n d'éventuels problèmes et planifier la vie\n quotidienne"}
				</Typography>
				<Button variant="contained" sx={{marginTop:5}} size="large" color='secondary'>Suivre mon cycle</Button>
			</Box>
		</Box>
	);
}


export function App() {
	return (

		<ThemeProvider theme={theme}>
			<div class="app-container">
				<div class="app-half-first">
					<NavMenu />
					<TitleApp />
				</div>
				<div class="app-half-second">
					<Box>
						<BottomTitle />
						<BottomBody />
					</Box>				
				</div>
			</div>
		</ThemeProvider>
	);
}

render(<App />, document.getElementById('app'));
