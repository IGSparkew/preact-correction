import { render, h, Component } from 'preact';
import './style.css';
import Router from 'preact-router';
import { Home } from './pages/home';
import { Profile } from './pages/profile';
import { Calculator } from './pages/calculator';
import { NotFound } from './pages/notFound';
import { Header } from './components/header';

export function App() {

	return (
		<div>
			<Header /> {/* Header component to go between different link*/}
			<Router> {/* Router componenet to defined routes of app*/}
				<Home path="/"/>  {/* Home page */}
				<Profile path="/profile"/> {/* Profile page */}
				<Calculator path="/calculator"/> {/* Calculator page */}
				<NotFound default/>
			</Router>
		</div>
	);
}

render(<App />, document.getElementById('app'));
