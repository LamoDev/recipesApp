import { createContext, useState } from "react";


export const FavoritesContext = createContext({
    ids:[],
    addFavorite: (id) => {},
    removeFavorite: (id)=> {},
});

// This component can be warpped around the app
function FavoritesContextProvider({children}){
    const [favoriteMealsIds ,setFavoriteMealsIds] =useState([]);

    function addFavorite(id){
       // updating state , based on the pevious state snapshot
       setFavoriteMealsIds((currentFavIds)=> [...currentFavIds , id])
    }

    function removeFavorite(id){
        setFavoriteMealsIds((currentFavIds)=> currentFavIds.filter((mealId)=>  mealId !==id))
    }

    const value = {
        ids: favoriteMealsIds,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>

}

export default FavoritesContextProvider;