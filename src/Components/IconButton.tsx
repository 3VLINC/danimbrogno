import * as React from 'react';
import { Grid} from "@material-ui/core";

export interface IconButtonProps {
    icon: React.ReactNode;
    text: React.ReactNode;
}
export const IconButton: React.FC<IconButtonProps> = ({ icon, text }) => {

    return (
        <Grid container spacing={16} alignItems="center">
            <Grid item>
                {icon}
            </Grid>
            <Grid item>
                {text}
            </Grid>
        </Grid>
    )
}