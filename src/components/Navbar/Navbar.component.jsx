import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Favorite } from '@mui/icons-material';
import { makeStyles } from '@material-ui/styles';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AddIcon from '@mui/icons-material/Add';
import TvIcon from '@mui/icons-material/Tv';
import MovieIcon from '@mui/icons-material/Movie';
import { Outlet, useNavigate } from 'react-router-dom';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { useEffect } from 'react';
const useStyles = makeStyles({
    root: {
      width: "100%",
      position: "fixed",
      bottom: 0,
      zIndex: 100
    },
  });
const BottomNav =()=> {
  const [value, setValue] = React.useState(0);
  const classes=useStyles();
  const navigate=useNavigate()
 useEffect(()=>{
    if(value===0) navigate('/')
    else if(value===1) navigate('/tvSeries')
    else if(value===2) navigate('/movies')
    else if(value===3) navigate('/favourites')
    else if(value===4) navigate('/search')
    else if(value===5) navigate('/add')
 },[value])
  return (
    <>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className={classes.root}
        style={{backgroundColor:"#1B1464"}}
        sx={{
          "&  .Mui-selected": {
            color:'lightgrey' ,
            backgroundColor:"darkblue"
          }
}}
      >
      
        <BottomNavigationAction style={{color:"white"}} label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{color:"white"}} label="TvSeries" icon={<TvIcon />} />
        <BottomNavigationAction style={{color:"white"}} label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{color:"white"}} label="MenuStore" icon={<WidgetsIcon />} />
        <BottomNavigationAction style={{color:"white"}} label="Search" icon={<SearchOutlinedIcon />} />
        {/* <BottomNavigationAction style={{color:"white"}} label="Search" icon={<AddIcon />} /> */}
      </BottomNavigation>
      <Outlet/>
      </>
  );
}

export default BottomNav
