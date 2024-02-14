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
			{/* Header component to go between different link*/}
			<Header /> 
			{/* Router componenet to defined routes of app*/}
			<Router>
				{/* Home page */} 
				<Home path="/"/> 
				{/* Profile page */} 
				<Profile path="/profile"/> 
				{/* Calculator page */}
				<Calculator path="/calculator"/> 
				<NotFound default/>
			</Router>
		</div>
	);
}

render(<App />, document.getElementById('app'));
