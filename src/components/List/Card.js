import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles((theme) => ({
    card:{
        padding:theme.spacing(1,1,1,2),
        margin: theme.spacing(1),
    },
    root:{
        width:'300px',
        backgroundColor: "#EBECF0",
        marginLeft: theme.spacing(1),
    },
}));


const Card = () => {
    const classes = useStyle();
    return (
        <div>
            <Paper className={classes.card}> Make a Something</Paper>
        </div>
    );
}

export default Card;
