import { createContext, useState } from "react";

const addItem = (favoriteItems, movieToadd) => {
  console.log(favoriteItems)
  const existingItem=favoriteItems.find((Item)=>Item.id===movieToadd.id)
  if(!existingItem)
   return [...favoriteItems,movieToadd];
  else
   return [...favoriteItems]
};

const removeItem = (removeItems, movieToremove) =>{
  return removeItems.filter((favoriteItem) => favoriteItem.id !== movieToremove.id);
}

export const FavoriteContext = createContext({
  favoriteItems: [],
  watchList:[],
  watched:[],
  addFavoriteItems: () => {},
  clearFavoriteItems: () => {},
  addWatchList:()=>{},
  clearWatchList:()=>{},
  addWatched:()=>{},
  clearWatched:()=>{}
});

export const FavoriteProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [watchList,setWatchList]=useState([])
  const [watched,setWatched]=useState([])

  const addFavoriteItems = (movieToadd) => {
    setFavoriteItems(addItem(favoriteItems, movieToadd));
    setTimeout(()=>{ window.localStorage.setItem('favorite_item', JSON.stringify(favoriteItems));},100)
  };

  const clearFavoriteItems = (movieToremove) => {
    setFavoriteItems(removeItem(favoriteItems, movieToremove));
  };

  const addWatchList=(watchMovie)=>{
    setWatchList(addItem(watchList,watchMovie))
    setTimeout(()=>{window.localStorage.setItem('watchlist_item', JSON.stringify(watchList));},100)
  }

  const clearWatchList = (removeWatchMovie) => {

    const data=Object.values(removeWatchMovie)
    console.log(removeWatchMovie)
    setWatchList(removeItem(watchList,removeWatchMovie))
  };

  const addWatched=(watchedMovie)=>{
    setWatched(addItem(watched,watchedMovie))
    setTimeout(()=>{ window.localStorage.setItem('watched_item', JSON.stringify(watched));},100)
  }

  const clearWatched = (removeWatchedMovie) => {
    setWatched(removeItem(watched,removeWatchedMovie))
  };
  
  const value = {
    favoriteItems,
    watchList,
    watched,
    addFavoriteItems,
    clearFavoriteItems,
    addWatchList,
    clearWatchList,
    addWatched,
    clearWatched
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};
