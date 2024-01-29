import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    dateInputs: [
        {id: 1, date: '2024-01-01'},
        {id: 2, date: '2024-01-16'},
    ],
};

let nextId = 3;
const calendarDatesSlice = createSlice({
    name: 'calendarDates',
    initialState,
    reducers: {
        addDate(state, action) {
            state.dateInputs.push({
                id: nextId++,
                date: action.payload
            });
        },
        removeDate(state, action) {
            const index = state.dateInputs.findIndex(
                dateInput => dateInput.id === action.payload
            );
            state.dateInputs.splice(index, 1);
        },
    },
});

export const { addDate, removeDate } = calendarDatesSlice.actions;

export const selectDateInputs = state => state.calendarDates.dateInputs;

export default calendarDatesSlice.reducer;