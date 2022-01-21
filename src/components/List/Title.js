import { InputBase, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

const useStyle = makeStyles((theme) => ({
    editableTitleContainer: {
        margin: theme.spacing(1),
        display: 'flex',
    },
    editableTitle: {
        flexGrow: 1,
        fontSize: "1.2rem",
        fontWeight: 'bold',
    },
    input: {
        fontSize: "1.2rem",
        fontWeight: 'bold',
        margin: theme.spacing(1),
        "&:focus": {
            background: '#ddd',
        },
    },
}));
export default function Title({ title }) {
    const [open, setOpen] = useState(false);
    const classes = useStyle();

    return (
        <div>
            {open ? (
                <div>
                    <InputBase
                        autoFocus
                        value={title}
                        inputProps={{
                            className: classes.input,
                        }}
                        fullWidth
                        onBlur={() => setOpen(!open)}>

                    </InputBase>
                </div>
            ) : (
                <div className={classes.editableTitleContainer}>
                    <Typography
                        onClick={() => setOpen(!open)}
                        className={classes.editableTitle}
                    >
                        {title}
                    </Typography>
                    <MoreHorizIcon></MoreHorizIcon>
                </div>
            )}
        </div>
    );
}