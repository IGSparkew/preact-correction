import { render } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import './style.css';

export function App() {
	const [dates, setDates] = useState([]);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
          console.log('Service Worker Registered', registration);

          // Demander les dates au service worker
          registration.active.postMessage('getDates');
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
	</div>
  );
}

render(<App />, document.getElementById('app'));
