import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Tab } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import Tabs from '@mui/material/Tabs';
import './search.styles.css'
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: 0,
    zIndex: 100,
    width:"60%",
    backgroundColor:"#d1d8e0",
  },
  button: {
    "&:focus": {
      color: "white"
    }
  }
});
const Search = () => {
  const classes=useStyles()
  const [type,setType]=useState(0)
  const [page, setPage] = useState(1)
  const handleChange = (event, newValue) => {
    setType(newValue);
    setPage(1)
  }
  return (
    <>
    <div className="textfield">
        <TextField 
          variant="filled" 
          color="primary"
          label="Search movies OR series"
          className={classes.root}
          style={{fontWeight:"500"}}
          inputProps={{style: {fontSize: 14, fontWeight:500, color:"lightblue"}}}
          InputLabelProps={{style: {fontSize: 14,fontWeight:500, color:"black"}}} 
        />
        <Button 
          variant='contained' 
          style={{marginLeft:"8px" , 
          backgroundColor:"#4b4b4b"}}
          className={classes.button}
        >
            <SearchIcon style={{color:"white"}}/>
        </Button>
    </div>
    <Tabs 
        centered value={type} 
        TabIndicatorProps={{
        style: {
          backgroundColor: "whitesmoke",
          paddingBottom:"1.5px"
        }
      }}
      onChange={handleChange}
    >
      <Tab style={{width:"50%", color:"white"}} label="search movies"/>
      <Tab style={{width:"50%" ,color:"white"}} label="search tv series"/>
    </Tabs>
    </>
  )
}

export default Search