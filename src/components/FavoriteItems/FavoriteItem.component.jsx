import React from 'react'
import './FavoriteItem.component.css'
import { useContext } from 'react'
import { FavoriteContext } from '../../contexts/favorite.context'
import './FavoriteItem.component.css'

const FavoriteItem = ({item,alignment}) => {
  const {id,poster,title,date,media,vote}=item
  
  const clearItemHandler=()=>{
    switch(alignment){
      case "Favorites":
      clearFavoriteItems(item)
      break;
   
     case "WatchList":
     clearWatchList(item)
     break;
   
     case "Watched":
     clearWatched(item)
     break;
   
     default:
     console.log("error")
    }
  }

  const {clearFavoriteItems,clearWatchList, clearWatched}=useContext(FavoriteContext)
  return (
    <>
      <div className="favorite-item-container">
        <div className="image-container">
            <img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt={`${poster}`} />
        </div>
        <span className='name'>{title}</span>
        <span className='quantity'>{vote.toFixed(1)}</span>
        <span className='price'>{media}</span>
        <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
       </div>
    </>

  )
}

export default FavoriteItem