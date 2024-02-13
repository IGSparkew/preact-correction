import { Home } from "./pages/home";
import { createTheme, ThemeProvider } from "@mui/material";
import Router from "preact-router";
import { Monitored } from "./pages/monitored";
import { NotFound } from "./pages/notFound";
import './assets/style.css'

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

