import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PendingRoundedIcon from '@mui/icons-material/PendingRounded';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { useContext } from 'react';
import { FavoriteContext } from '../../contexts/favorite.context';


function FavoriteMenu({...menu}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {addFavoriteItems} = useContext(FavoriteContext)
    const {addWatchList}=useContext(FavoriteContext)
    const {addWatched}=useContext(FavoriteContext)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const addToFavorite=()=>addFavoriteItems(menu)
    const addToWatchList=()=>{
      addWatchList(menu);
    }
    const addToWatched=()=>addWatched(menu)

    return (
      <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }} style={{position:'absolute',top:'10px'}}>
          <Tooltip title="ADD TO...">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <PendingRoundedIcon style={{ color: "white" }}/>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 160,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'left', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        >
          <MenuItem onClick={addToFavorite}>
            <FavoriteIcon />  Add to favorite
          </MenuItem>
          <MenuItem onClick={addToWatchList}>
            <BookmarksIcon  /> Add to watch later
          </MenuItem>
          <MenuItem onClick={addToWatched}>
              <TheaterComedyIcon /> Add to watched
          </MenuItem>
        </Menu>
      </React.Fragment>
  );
}
export  default FavoriteMenu