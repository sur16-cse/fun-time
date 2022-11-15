import { createContext, useState } from "react";

const addItem = (favoriteItems, movieToadd,getdata) => {
  console.log(favoriteItems)
  const existingItem=favoriteItems.find((Item)=>Item.id===movieToadd.id)
  
  let key;
  if(getdata==="fav")
    key='favorite_item'
  else if(getdata==='watchlist')
    key='watchlist_item'
  else if(getdata==='watched')
    key='watched_item'
  
  if(!existingItem){
      window.localStorage.setItem(key, JSON.stringify([...favoriteItems,movieToadd]))
     return [...favoriteItems,movieToadd];
  }
  else{
     window.localStorage.setItem(key, JSON.stringify([...favoriteItems]))
     return [...favoriteItems]
  }
};

const removeItem = (removeItems, movieToremove,getdata) =>{
   
  let key;
  if(getdata==="fav")
    key='favorite_item'
  else if(getdata==='watchlist')
    key='watchlist_item'
  else if(getdata==='watched')
    key='watched_item'
  
   localStorage.setItem(key,JSON.stringify( removeItems.filter((favoriteItem) => favoriteItem.id !== movieToremove.id)))
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
  const [favoriteItems, setFavoriteItems] = useState(()=>{
    const data=localStorage.getItem("favorite_item");
    return data?JSON.parse(data):[]
  });
  const [watchList,setWatchList]=useState(()=>{
    const data=localStorage.getItem("watchlist_item");
    return data?JSON.parse(data):[]
  })
  const [watched,setWatched]=useState(()=>{
    const data=localStorage.getItem("watched_item");
    return data?JSON.parse(data):[]
  })

  const addFavoriteItems = (movieToadd) => {
    setFavoriteItems(addItem(favoriteItems, movieToadd,"fav"));
  };

  const clearFavoriteItems = (movieToremove) => {
    setFavoriteItems(removeItem(favoriteItems, movieToremove,"fav"));
  };

  const addWatchList=(watchMovie)=>{
    setWatchList(addItem(watchList,watchMovie,"watchlist"))
  }

  const clearWatchList = (removeWatchMovie) => {

    const data=Object.values(removeWatchMovie)
    console.log(removeWatchMovie)
    setWatchList(removeItem(watchList,removeWatchMovie,"watchlist"))
  };

  const addWatched=(watchedMovie)=>{
    setWatched(addItem(watched,watchedMovie,"watched"))
  }

  const clearWatched = (removeWatchedMovie) => {
    setWatched(removeItem(watched,removeWatchedMovie,"watched"))
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
