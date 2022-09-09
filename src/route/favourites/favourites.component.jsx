import React,{useEffect} from 'react'
import { FavoriteContext } from '../../contexts/favorite.context'
import { useContext } from 'react'
import FavoriteItem from '../../components/FavoriteItems/FavoriteItem.component'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

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
  }, [alignment])
  
  return (
<>
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      fullWidth={true}
      style={{backgroundColor:"#535c68" ,marginTop:"10px"}}
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
  
    
        <div>
          {newArray && newArray.map((item,id)=>(
            <div key={id}>
              <FavoriteItem  item={item}  alignment={alignment}/>
            </div>
            )) }
        </div>
  </>    
  )
}
export default Favourites