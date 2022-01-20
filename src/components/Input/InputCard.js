import { fade, IconButton, InputBase, makeStyles, Paper } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import React from 'react';


const useStyle = makeStyles((theme) => ({
    card:{
        margin: theme.spacing(0,1,1,1),
        paddingBottom: theme.spacing(4),
        padding: theme.spacing(1,1,1,0),
    },
    input:{
        margin: theme.spacing(1),
    },
    btnConfirm:{
        background:"#5aacff",
        color:"#fff",
        "&:hover":{
            background:fade("#5aac44",0.5),
        },
        borderRadius:5,
        borderWidth:1,
        borderColor:'#5aacff',
        overflow: 'hidden',
        
    },
    confirm:{
        margin: theme.spacing(0,1,1,1),
    },
}));


const Inputcard = ({setOpen}) => {
    const classes = useStyle();
    return (
        <div>
            <div>
                <Paper className={classes.card}>
                    <InputBase 
                    multiline 
                    onBlur = {()=>setOpen(false)}
                    fullWidth
                    inputProps={{
                        className: classes.input,
                    }}
                    placeholder='Enter a title of this card'
                    />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <button className={classes.btnConfirm} onClick={()=>setOpen(false)}>Add Card</button>
                <IconButton onClick={()=>setOpen(false)}>
                    <ClearIcon />
                </IconButton>
            </div>
        </div>

    );
}

export default Inputcard;
