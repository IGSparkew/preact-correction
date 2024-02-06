import { render } from 'preact';
import './style.css';
import { Button, ThemeProvider, createTheme } from '@mui/material';
import { purple } from '@mui/material/colors';
import { NavMenu } from './components/menu';

let theme = createTheme({

});

theme = createTheme(theme, {
	palette: {
	  purpleButton: theme.palette.augmentColor ({
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
			<NavMenu />
			<Button variant="contained" size="large" color='purpleButton'>Découvrir</Button>
		</ThemeProvider>
	);
}

render(<App />, document.getElementById('app'));
