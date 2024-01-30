import { render } from 'preact';
import './style.css';
import { Provider } from 'react-redux';
import store from './store';
import { InputDate } from './components/InputDate';
import { HistoryDate } from './components/HistoryDate';

export function App() {
	return (		
		<Provider store={store}>
			<div>
				<h1>Redux Correction</h1>
				<InputDate />
				<HistoryDate />
			</div>
		</Provider>
	);
}

render(<App />, document.getElementById('app'));
