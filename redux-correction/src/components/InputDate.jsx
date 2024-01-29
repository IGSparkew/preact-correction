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


export function InputDate() {

    // useInputDate is a custom hook that manage the user input
    const { userDate, changeInput } = useInputDate();

    
    // handleSubmit is a function that is called when the user submit a date
    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input class="date-input" type="date" value={userDate} onChange={changeInput}/>
                <button class="submit-button" type="submit">Enter date</button>
            </form>
        </div>
    );    
}