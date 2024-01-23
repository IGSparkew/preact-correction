import { render } from 'preact';
import './style.css';
import { InputDate } from './components/InputDate';

export function App() {

	return (
		<div>
			<InputDate />
		</div>
	);
}

render(<App />, document.getElementById('app'));
