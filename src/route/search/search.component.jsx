import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    width: "80%",
    position: "fixed",
    bottom: 0,
    zIndex: 100,
    display:"flex",
  },
});
const Search = () => {
  const classes=useStyles()
  const [type,setType]=useState(0)
  return (
    <TextField 
      variant="filled" 
      style={{flex:1}}
      className={classes.root}
      color="primary"
      label="Search"
     />
  )
}

export default Search