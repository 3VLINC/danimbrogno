import * as React from 'react';
import { DateRange } from "../app.interface";

export const DateRangeDisplay: React.FC<{dateRange: DateRange}> = (props) => {

    const { dateRange: { from, to } } = props;

    return (
        <React.Fragment>
            {from} – {to}
        </React.Fragment>
    )
}