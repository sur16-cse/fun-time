import { createContext, useState } from "react";

const addItem = (favoriteItems, movieToadd) => {
  console.log(favoriteItems)
  // const existingItem=favoriteItems.find((Item)=>Item.id===movieToadd.id)
  // if(!existingItem)
   return [...favoriteItems,movieToadd];
};

const removeItem = (removeItems, movieToremove) =>{
    console.log("remove")
    console.log(movieToremove.id,removeItems.id)
  const list=[...removeItems]
  return list.filter((favoriteItem) => favoriteItem.id !== movieToremove.id);
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
  };

  const clearFavoriteItems = (movieToremove) => {
    setFavoriteItems(removeItem(favoriteItems, movieToremove));
  };

  const addWatchList=(watchMovie)=>{
    setWatchList(addItem(watchList,watchMovie))
  }

  const clearWatchList = (removeWatchMovie) => {

    const data=Object.values(watchList)
    console.log(data)
    setWatchList(removeItem(watchList,removeWatchMovie))
  };

  const addWatched=(watchedMovie)=>{
    setWatched(addItem(watched,watchedMovie))
  }

  const clearWatched = (removeWatchedMovie) => {
    setWatched(removeItem(watched,removeWatchedMovie))
  };

  //console.log("surbhi")
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