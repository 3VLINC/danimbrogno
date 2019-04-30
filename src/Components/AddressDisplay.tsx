import * as React from 'react';
import { Address } from "../app.interface";

export const AddressDisplay: React.FC<{address: Address}> = (props) => {

    const { address: { city, province } } = props;

    return (
        <React.Fragment>
            {city}, {province}
        </React.Fragment>
    )
}