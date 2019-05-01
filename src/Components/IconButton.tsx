import * as React from 'react';
import { Grid} from "@material-ui/core";

export interface IconButtonProps {
    icon: React.ReactNode;
    text: React.ReactNode;
}
export const IconButton: React.FC<IconButtonProps> = ({ icon, text }) => {

    return (
        <Grid container spacing={8} wrap="nowrap" justify="flex-start" alignItems="center">
            <Grid item xs='auto'>
                {icon}
            </Grid>
            <Grid item xs={8}>
                {text}
            </Grid>
        </Grid>
    )
}