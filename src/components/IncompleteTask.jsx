import React from 'react'
import { makeStyles } from "@material-ui/styles";
import { Box } from '@material-ui/core';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

export const IncompleteTask = () => {
    const classes = useStyles()
    
    return (
        <Box  className={`${classes.box} ${classes.incomplete}`} p={1} display="flex" bgcolor="blue"alignItems="center">
            <CheckCircleOutlineOutlinedIcon OnClick className={classes.icon}/>
            incompleted tasks
        </Box>
    )
}

const useStyles = makeStyles({
    box:{
        background: "#00c9ff", /* fallback for old browsers */
        background: "-webkit-linear-gradient(to right, #00c9ff, #92fe9d)", /* Chrome 10-25, Safari 5.1-6 */
        background:" linear-gradient(to right, #00c9ff, #92fe9d)",
        padding:"10px 15px",
        borderRadius:5
        
    },
    icon:{
        padding:"0px 10px"
    },
    incomplete:{

    },
    complete:{
        textDecoration: "line-through"
    }
})