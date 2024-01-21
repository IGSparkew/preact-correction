import { Component, createRef } from "preact";
import { useCallback, useEffect, useState } from "preact/hooks";

// hook that manage the user input
function useInputDate() {
    // userDate is a string that represent the user input
    const [userDate, setUserDate] = useState(new Date().toISOString().split('T')[0]);

    // changeInput is a function that is called when the user change the input
    const changeInput = useCallback((event) => {
        setUserDate(event.target.value);
    }, [userDate])


    return {userDate, changeInput};
}

/**
 * Input date component that calculate the next 3 periods dates from the user input
 * between periods we have 28 days
 *  
 */
export function InputDate() {

    // useInputDate is a custom hook that manage the user input
    const { userDate, changeInput } = useInputDate();

    // isCalculated is a boolean that indicate if the user has already submit a date
    const [isCalculated, setIsCalculated] = useState(false);

    // nextDates is an array of 3 dates that represent the next periods dates
    const [nextDates, setNextDates] = useState([]);
    
    // handleSubmit is a function that is called when the user submit a date
    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        setIsCalculated(true);
    }, [isCalculated]);
    
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

    return (
        <div>
            <h1 class="title-execice">Exercices 1: calculer les dates des prochaines règles</h1>
            <form onSubmit={handleSubmit}>
                <input class="date-input" type="date" value={userDate} onChange={changeInput}/>
                <button class="submit-button" type="submit">Enter date</button>
            </form>

            {isCalculated && (<div>
                <h2>Dates des 3 prochaines périodes menstruelles :</h2>
                <ul>
                    {nextDates.map((date, index) => <li key={index}>{date}</li>)}
                </ul>
            </div>)}
        </div>
    );    
}