import { render, h } from 'preact';
import './style.css';
import { InputDate } from './components/InputDate';
import Router from 'preact-router';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Calculator } from './pages/calculator';
import { NotFound } from './pages/notFound';
import { Header } from './components/header';

export function App() {

	return (
		<div>
			<Header />
			<Router>
				<Home path="/"/>
				<Login path="/login"/>
				<Register path="/register"/>
				<Calculator path="/calculator"/>
				<NotFound default/>
			</Router>
		</div>
	);
}

render(<App />, document.getElementById('app'));
