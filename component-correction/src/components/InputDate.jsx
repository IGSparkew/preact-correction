import { Component } from "preact";
import { useCallback, useEffect, useState } from "preact/hooks";
import { ShowDate } from "./showDate";

function useInputDate() {
    const [userDate, setUserDate] = useState(new Date().toISOString().split('T')[0]);

    const changeInput = useCallback((event) => {
        setUserDate(event.target.value);
    }, [userDate])


    return {userDate, changeInput};
}


export function InputDate() {
    const { userDate, changeInput } = useInputDate();

    return (
        <div>
            <input type="date" value={userDate} onChange={changeInput}/>
            <ShowDate date={userDate}/>
        </div>
    );    
}