import { useCallback, useState } from "preact/hooks";
import { useDispatch } from "react-redux";
import { addDate } from "../features/calendarDates";

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

    const dispatch = useDispatch();
    
    // handleSubmit is a function that is called when the user submit a date
    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        dispatch(addDate(userDate));
    }, [userDate, dispatch]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input class="input-date" type="date" value={userDate} onChange={changeInput}/>
                <button class="add-button" type="submit">Enter date</button>
            </form>
        </div>
    );    
}