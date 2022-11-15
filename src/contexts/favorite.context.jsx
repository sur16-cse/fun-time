import { createContext, useState } from "react";

const addItem = (favoriteItems, movieToadd,getdata) => {
  console.log(favoriteItems)
  const existingItem=favoriteItems.find((Item)=>Item.id===movieToadd.id)
  
  let key;
  if(getdata==="fav")
    key=favorite_item
  else if(getdata==='watchlist')
    key=watchlist_item
  else if(getdata==='watched')
    key=watched
  
  if(!existingItem){
      window.localStorage.setItem(key, JSON.stringify([...favoriteItems,movieToadd]))
     return [...favoriteItems,movieToadd];
  }
  else{
     window.localStorage.setItem('item', JSON.stringify([...favoriteItems]))
     return [...favoriteItems]
  }
};

const removeItem = (removeItems, movieToremove) =>{
   localStorage.setItem("item",JSON.stringify( removeItems.filter((favoriteItem) => favoriteItem.id !== movieToremove.id)))
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
    setFavoriteItems(addItem(favoriteItems, movieToadd,"fav"));
  };

  const clearFavoriteItems = (movieToremove) => {
    setFavoriteItems(removeItem(favoriteItems, movieToremove));
  };

  const addWatchList=(watchMovie)=>{
    setWatchList(addItem(watchList,watchMovie,"watchlist"))
  }

  const clearWatchList = (removeWatchMovie) => {

    const data=Object.values(removeWatchMovie)
    console.log(removeWatchMovie)
    setWatchList(removeItem(watchList,removeWatchMovie))
  };

  const addWatched=(watchedMovie)=>{
    setWatched(addItem(watched,watchedMovie,"watched"))
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
