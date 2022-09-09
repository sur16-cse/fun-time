import React,{useEffect} from 'react'
import { FavoriteContext } from '../../contexts/favorite.context'
import { useContext } from 'react'
import FavoriteItem from '../../components/FavoriteItems/FavoriteItem.component'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './favourites.styles.css'

const Favourites = () => {
  const {favoriteItems}=useContext(FavoriteContext)
  const {watchList}=useContext(FavoriteContext)
  const {watched}=useContext(FavoriteContext)
  const [alignment, setAlignment] = React.useState('Favorites');
  const [newArray,setNewArray] = React.useState([]);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
   
    switch(alignment){
     case "Favorites":
     setNewArray(favoriteItems);
     break;
   
     case "WatchList":
     setNewArray(watchList);
     break;
   
     case "Watched":
     setNewArray(watched);
     break;
   
     default:
     console.log("error")
    }
    
    // eslint-disable-next-line
  }, [alignment,favoriteItems,watchList,watched])
  
  return (
<>
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      fullWidth={true}
      style={{backgroundColor:"#535c68"}}
      sx={{
      '& .Mui-selected': {
        backgroundColor:"#aaa69d",
        color:"lightsalmon"
        },
      '& .MuiToggleButton-standard':{
        color:"#f7f1e3",
        fontWeight:600
      }
}}
    >
      <ToggleButton value="Favorites" >Favorites</ToggleButton>
      <ToggleButton value="WatchList" >WatchList</ToggleButton>
      <ToggleButton value="Watched" >Watched</ToggleButton>
    </ToggleButtonGroup>
  
        { newArray.length>0 && <div className='favorite-container'>
            <div className='favorite-header'>
                <div className="header-block">
                    <span>Movie</span>
                </div>
                <div className="header-block">
                    <span>Title</span>
                </div>
                <div className="header-block">
                    <span>Rating</span>
                </div>
                <div className="header-block">
                    <span>MediaType</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
          </div>
        }
        
          {newArray && newArray.map((item,id)=>(
            <div key={id} className="itemStore">
              <FavoriteItem  item={item}  alignment={alignment}/>
            </div>
            )) }
        
  </>    
  )
}
export default Favourites