import { useCallback, useEffect, useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import { selectDateInputs, removeDate } from "../features/calendarDates";

export function HistoryDate() {

    const dates = useSelector(selectDateInputs);
    const dispatch = useDispatch();

    return(
        <div class="container">
            <h2 class="title">Dates dans le store:</h2>
            <ul class="date-list">
                {dates.map((date, index) => 
                (
                    <li key={index} class="date-item">
                        <div>
                            <p>{date.date}</p>
                            <button  class="remove-button" onClick={()=> dispatch(removeDate(index))}>X</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}