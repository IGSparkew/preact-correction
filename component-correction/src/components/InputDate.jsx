import { Component, createRef } from "preact";
import { useCallback, useEffect, useState } from "preact/hooks";

function useInputDate() {
    const [userDate, setUserDate] = useState(new Date().toISOString().split('T')[0]);

    const changeInput = useCallback((event) => {
        setUserDate(event.target.value);
    }, [userDate])


    return {userDate, changeInput};
}


export function InputDate() {
    const { userDate, changeInput } = useInputDate();
    const [isCalculated, setIsCalculated] = useState(false);
    const [nextDates, setNextDates] = useState([]);
    

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        setIsCalculated(true);
    }, [isCalculated]);
    
    useEffect(() => {
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