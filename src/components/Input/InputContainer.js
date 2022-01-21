import { Collapse, fade, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Inputcard from './InputCard';

const useStyle = makeStyles((theme) => ({
    root:{
        width:'300px',
        marginTop:theme.spacing(1),
    },
    addCard:{
        padding: theme.spacing(1,1,1,2),
        margin:theme.spacing(0,1,1,1),
        backgroundColor:'#EBECF0',
        '&:hover':{
            backgroundColor:fade('#000', 0.25),
        },
    },
}));

const Inputcontainer = ({listId, type}) => {
    const classes = useStyle();
    const [open,setOpen] = useState(false);
    return (
        <div className = {classes.root}>
            <Collapse in={open}>
            <Inputcard setOpen={setOpen} listId={listId} type={type} />
            </Collapse>
            <Collapse in={!open}>
                <Paper className={classes.addCard} elevation={0} onClick={()=> setOpen(!open)}>
                    <Typography>
                    {type === 'card'? '+ Add a Card': '+ Add another List'}
                    </Typography>
                </Paper>
            </Collapse>
        </div>
    );
}

export default Inputcontainer;
