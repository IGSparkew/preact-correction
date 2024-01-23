import { createRef } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";

export function ShowDate({isCalculated, userDate}) {

    // nextDates is an array of 3 dates that represent the next periods dates
    const [nextDates, setNextDates] = useState([]);

    useEffect(() => {
        // if the user has already submit a date, we calculate the next periods dates
        if (isCalculated) {
            const dates = [];
            const date = new Date(userDate);
            for (let i = 0; i < 3; i++) {
                date.setDate(date.getDate() + 28);
                dates.push(date.toISOString().split('T')[0]);
            }
            setNextDates(dates);
        }
    }, [isCalculated, userDate])

    return(
        <div>
            <h2>Dates des 3 prochaines périodes menstruelles :</h2>
            <ul>
                {nextDates.map((date, index) => <li key={index}>{date}</li>)}
            </ul>
        </div>
    );
}