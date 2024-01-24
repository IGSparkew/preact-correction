import { Component, createRef } from "preact";
import { useCallback, useEffect, useState } from "preact/hooks";
import { ShowDate } from "./ShowDate";

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
 * Input date component that get date from the user input
 *  
 */
export function InputDate() {

    // useInputDate is a custom hook that manage the user input
    const { userDate, changeInput } = useInputDate();

    // isCalculated is a boolean that indicate if the user has already submit a date
    const [isCalculated, setIsCalculated] = useState(false);
    
    // handleSubmit is a function that is called when the user submit a date
    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        setIsCalculated(true);
    }, [isCalculated]);

    return (
        <div>
            <h1 class="title-execice">Exercices 1: calculer les dates des prochaines règles</h1>
            <form onSubmit={handleSubmit}>
                <input class="date-input" type="date" value={userDate} onChange={changeInput}/>
                <button class="submit-button" type="submit">Enter date</button>
            </form>

            {isCalculated && <ShowDate isCalculated={isCalculated} userDate={userDate} />}
        </div>
    );    
}