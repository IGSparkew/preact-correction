import { render } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import './style.css';
import { InputDate } from './components/InputDate';
import { HistoryDate } from './components/HistoryDate';

export function App() {
	const [dates, setDates] = useState([]);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
          console.log('Service Worker Registered', registration);
          
          // Listen for updates to the service worker
          registration.addEventListener('updatefound', () => {
            // If there is a new service worker, track its state
            const newWorker = registration.installing;

            if (newWorker == null) {
                return;
            }

            newWorker.addEventListener('statechange', () => {
            // If the new service worker has become active, send a message to it
            if (newWorker.state === 'activated') {
                newWorker.postMessage('getDates');
            }
          });
        });
      })
        .catch(function(error) {
          console.log('Service Worker Registration Failed', error);
        });

      // Écouter les messages du service worker
      navigator.serviceWorker.addEventListener('message', function(event) {
        setDates(event.data);
      });
    }
  }, []);

  return (
	<div>
	  <h1>Service Worker</h1>
    <InputDate />
    <HistoryDate />
	</div>
  );
}

render(<App />, document.getElementById('app'));
