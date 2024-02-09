import { useCallback, useEffect, useState } from "preact/hooks";

export function HistoryDate({dates}) {

    const removeDate = useCallback((index) => {

    },[]);

    return(
        <div class="container">
            <h2 class="title">Dates dans le store:</h2>
            <ul class="date-list">
                {dates.map((date, index) => 
                (
                    <li key={index} class="date-item">
                        <div>
                            <p>{date.date}</p>
                            <button  class="remove-button" onClick={()=> removeDate(index)}>X</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}