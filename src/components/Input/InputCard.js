import { fade, IconButton, InputBase, makeStyles, Paper } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import React, { useContext, useState } from 'react';
import storeApi from '../../utils/storeApi';


const useStyle = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(0, 1, 1, 1),
        paddingBottom: theme.spacing(4),
        padding: theme.spacing(1, 1, 1, 0),
    },
    input: {
        margin: theme.spacing(1),
    },
    btnConfirm: {
        background: "#5aacff",
        color: "#fff",
        "&:hover": {
            background: fade("#5aac44", 0.5),
        },
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#5aacff',
        overflow: 'hidden',

    },
    confirm: {
        margin: theme.spacing(0, 1, 1, 1),
    },
}));


const Inputcard = ({ setOpen, listId, type }) => {
    const classes = useStyle();
    const { addMoreCard, addMoreList} = useContext(storeApi);
    const [title, setTitle] = useState(null);
    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };
    const handleBtnConfirm = () => {
        if (type === 'card') {
            addMoreCard(title, listId);
            setTitle('');
            setOpen(false);
        }
        else {
            addMoreList(title);
            setTitle('');
            setOpen(false);
        }
    };


    return (
        <div>
            <div>
                <Paper className={classes.card}>
                    <InputBase
                        onChange={handleOnChange}
                        multiline
                        onBlur={() => setOpen(false)}
                        fullWidth
                        inputProps={{
                            className: classes.input,
                        }}
                        value={title}
                        placeholder={type === 'card'
                            ? "Enter a title of this card ..."
                            : "Enter List Title"
                        }
                    />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <button className={classes.btnConfirm} onClick={handleBtnConfirm}>
                    {type === 'card' ? 'Add Card' : 'Add List'}
                </button>
                <IconButton onClick={() => setOpen(false)}>
                    <ClearIcon />
                </IconButton>
            </div>
        </div>

    );
}

export default Inputcard;
