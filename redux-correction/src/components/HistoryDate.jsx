import { useCallback, useEffect, useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { selectDateInputs, removeDate } from "../features/calendarDates";

export function HistoryDate() {

    // get dates from state redux
    const dates = useSelector(selectDateInputs);
    
    // use dispatch to use action in state
    const dispatch = useDispatch();

    return(
        <div class="container">
            <h2 class="title">Dates dans le store:</h2>
            {/* loop to show all dates get from state redux */}
            <ul class="date-list">
                {dates.map((date, index) => 
                (
                    <li key={index} class="date-item">
                        <div>
                            <p>{date.date}</p>
                            {/* Button to remove data on click with the function removeDate of state called by dispatch function */}
                            <button  class="remove-button" onClick={()=> dispatch(removeDate(index))}>X</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}