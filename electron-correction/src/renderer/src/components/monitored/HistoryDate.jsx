import { useCallback } from "preact/hooks";

export function HistoryDate({dates}) {

    const removeDate = useCallback((key) => {
        navigator.serviceWorker.controller.postMessage({action: 'delete', key: key});
    },[]);

    return(
        <div class="container">
            <ul class="date-list">
                {dates.map((date, index) => 
                (
                    <li key={index} class="date-item">
                        <div>
                            <p>{date.date}</p>
                            <button  class="remove-button" onClick={()=> removeDate(date.key)}>X</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}