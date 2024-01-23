import { render, h } from 'preact';
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
			<Header />
			<Router>
				<Home path="/"/>
				<Profile path="/profile"/>
				<Calculator path="/calculator"/>
				<NotFound default/>
			</Router>
		</div>
	);
}

render(<App />, document.getElementById('app'));
