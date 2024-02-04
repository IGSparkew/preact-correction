import { render } from 'preact';
import preactLogo from './assets/preact.svg';
import './style.css';
import { Button, ThemeProvider, createTheme } from '@mui/material';
import { purple } from '@mui/material/colors';


const theme = createTheme({
	palette: {
	  primary: purple,
	},
  });

export function App() {
	return (

		<ThemeProvider theme={theme}>
		<div>
			<Button variant="contained" size="large" color='primary'>Découvrir</Button>
		
		</div>
		</ThemeProvider>
	);
}

render(<App />, document.getElementById('app'));
