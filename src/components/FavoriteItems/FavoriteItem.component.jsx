import React from 'react'
import './FavoriteItem.component.css'
import { useContext } from 'react'
import { FavoriteContext } from '../../contexts/favorite.context'
import { useEffect } from 'react'
const FavoriteItem = ({item,alignment}) => {
  const {id,poster,title,date,media,vote}=item
  // console.log(poster)
  console.log(item)
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
      <div color="white">{title}</div>
      <div className="checkout-item-container">
        <div className="image-container">
            <img src={poster} alt={`${poster}`} />
        </div>
        <span className='name'>{title}</span>
        {/* <span className='quantity'>
            <div className="arrow"  onClick={removeItemHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
            <div className="arrow" onClick={addItemHandler}>&#10095;</div>
        </span> */}
        <span className='quantity'>{vote}</span>
        <span className='price'>{media}</span>
        <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
       </div>
    </>

  )
}

export default FavoriteItem