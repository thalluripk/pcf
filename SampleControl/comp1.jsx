import * as React from "react"
import { FluentProvider, teamsLightTheme, Button } from '@fluentui/react-components';
import 'js-year-calendar/dist/js-year-calendar.css';
import { Calendar, CalendarControls } from "./Calendar"



export default function comp1(props) {

    function DatePickHandler(e) {
        console.log("Date picked")
    }

    return (
    <FluentProvider theme={teamsLightTheme}>
        <CalendarControls year={2024} />
        <Calendar year={2024} onPickDate={DatePickHandler} />
    </FluentProvider>
    )
}