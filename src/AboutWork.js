import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Works from './Works.js';
import ItsWork from './ItsWork.js'

const useStyles = makeStyles((theme) => ({
root : {
    height:'100vh',
},

}));
export  function AboutWork(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Works />
        </div>
    )
}





