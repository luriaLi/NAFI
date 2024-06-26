import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

function Calendar() {
    return ( 
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker orientation="landscape" />
            </LocalizationProvider>
        </div>
     );
}

export default Calendar;