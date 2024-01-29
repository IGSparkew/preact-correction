import { render } from 'preact';
import './style.css';
import { Provider } from 'react-redux';
import store from './store';

export function App() {
	return (		
		<Provider store={store}>
			<div>
				<h1>Redux Correction</h1>
			</div>
		</Provider>
	);
}

render(<App />, document.getElementById('app'));
