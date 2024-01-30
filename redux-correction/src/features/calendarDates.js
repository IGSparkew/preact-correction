import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    dateInputs: [],
    nextId: 0,
};

const calendarDatesSlice = createSlice({
    name: 'calendarDates',
    initialState,
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

export const { addDate, removeDate } = calendarDatesSlice.actions;

export const selectDateInputs = (state) => state.calendarDates.dateInputs;

export default calendarDatesSlice.reducer;