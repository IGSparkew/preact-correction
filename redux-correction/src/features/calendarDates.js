import { createSlice } from "@reduxjs/toolkit";

// The initial state of app 
const initialState = {
    dateInputs: [],
    nextId: 0,
};

// The slice for calendarDates
const calendarDatesSlice = createSlice({
    name: 'calendarDates',
    initialState,
    /**
     *  function to interract with the state
     *  addDate: add a date to the state
     *  removeDate: remove a date from the state
     */  
    reducers: {
        addDate(state, action) {
            state.dateInputs.push({ id: state.nextId, date: action.payload});
            state.nextId+=1;
        },
        removeDate(state, action) {
            state.dateInputs = state.dateInputs.filter(dateInput => dateInput.id !== action.payload);
        },
    },
});


// Export to use in App
export const { addDate, removeDate } = calendarDatesSlice.actions;

export const selectDateInputs = (state) => state.calendarDates.dateInputs;

export default calendarDatesSlice.reducer;