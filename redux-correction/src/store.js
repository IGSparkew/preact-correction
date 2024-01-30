import {configureStore} from '@reduxjs/toolkit';
import calendarDatesReducer from './features/calendarDates';

export default configureStore({
    reducer: {
        calendarDates: calendarDatesReducer,
    }
});