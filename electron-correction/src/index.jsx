import { render, h, Component } from 'preact';

import '../style.css';
import Router, { Route } from 'preact-router';
import { ThemeProvider } from '@emotion/react';
import { createTheme, Box, Button } from '@mui/material';
import { Monitored } from './pages/monitored';
import { NotFound } from './pages/notFound';
import { Home } from './pages/home';

export function App() {


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

	return (
        <ThemeProvider theme={theme}>
			<Router>
				<Home path="/" />			
				<Monitored path="/monitored"/>
				<NotFound default />
			</Router>
		</ThemeProvider>
	);
}

render(<App />, document.getElementById('app'));
