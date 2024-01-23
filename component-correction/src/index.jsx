import { render } from 'preact';
import './style.css';
import { useState } from 'preact/hooks';
import { ShowDate } from './components/ShowDate';

export function App() {

	 // isCalculated is a boolean that indicate if the user has already submit a date
	 const [isCalculated, setIsCalculated] = useState(true);

	 // userDate is the date of start periods
	 const [userDate, setUserDate] = useState(Date.now());

	return (
		<div>
			<ShowDate isCalculated={isCalculated} userDate={userDate} />
		</div>
	);
}

render(<App />, document.getElementById('app'));
