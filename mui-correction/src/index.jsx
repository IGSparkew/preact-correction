import { render } from 'preact';
import './style.css';
import { Box, Button, ThemeProvider, Typography, createTheme, useMediaQuery, useTheme } from '@mui/material';
import { NavMenu } from './components/menu';
import { TitleApp } from './components/titleApp';
import { BottomTitle } from './components/bottomTitle';
import { BottomBody } from './components/bottomBody';

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

export function App() {
	return (

		<ThemeProvider theme={theme}>
			<div class="app-container">
				<div class="app-half-first">
					<NavMenu />
					<TitleApp />
					<Box sx={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:35}}>
						<Button variant="contained" size="large" color='secondary'>Découvrir</Button>
                	</Box>
				</div>
				<div class="app-half-second">
					<Box>
						<BottomTitle />
						<BottomBody/>
					</Box>				
				</div>
			</div>
		</ThemeProvider>
	);
}

render(<App />, document.getElementById('app'));
