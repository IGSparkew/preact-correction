import { render } from 'preact';
import './style.css';
import { Box, Button, ThemeProvider, createTheme } from '@mui/material';
import { purple } from '@mui/material/colors';
import { NavMenu } from './components/menu';

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

export function App() {
	return (

		<ThemeProvider theme={theme}>
			<div class="app-container">
				<div class="app-half-first">
					<NavMenu />
					<Button variant="contained" size="large" color='secondary'>Découvrir</Button>
				</div>
				<div class="app-half-second">
				</div>
			</div>
		</ThemeProvider>
	);
}

render(<App />, document.getElementById('app'));
