import { Box, Button, ThemeProvider, createTheme } from '@mui/material';
import { h } from 'preact';
import { NavMenu } from '../components/home/menu';
import { InputDate } from '../components/monitored/InputDate';
import { HistoryDate } from '../components/monitored/HistoryDate';
import { useEffect, useState } from 'preact/hooks';

export function Monitored(props) {

    const [dates, setDates] = useState([]);

    useEffect(() => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then(function(registration) {
                console.log('Service Worker Registered', registration);
  
                // If there is a new service worker, track its state
                if (registration.installing) {
                    const newWorker = registration.installing;
  
                    newWorker.addEventListener('statechange', () => {
                        // If the new service worker has become active, send a message to it
                        if (newWorker.state === 'activated') {
                            newWorker.postMessage({action: 'get'});
                        }
                    });
                } else if (registration.waiting) {
                    registration.waiting.postMessage({action: 'get'});
                } else if (registration.active) {
                    registration.active.postMessage({action: 'get'});
                }
  
                // Listen for updates to the service worker
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
  
                    newWorker.addEventListener('statechange', () => {
                        // If the new service worker has become active, send a message to it
                        if (newWorker.state === 'activated') {
                            newWorker.postMessage({action: 'get'});
                        }
                    });
                });
            })
            .catch(function(error) {
                console.log('Service Worker Registration Failed', error);
            });
  
        // Listen for messages from the service worker
        navigator.serviceWorker.addEventListener('message', function(event) {
            setDates(event.data);
        });
      }
    }, []);



    return (
        <div class="app-cover-background">
            <NavMenu />
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                <InputDate />
                <HistoryDate dates={dates}/>
            </Box>
            
        </div>
    );
}