import { configureStore } from "@reduxjs/toolkit";
import favoritesSlice from './favorites'

export const store = configureStore({
    // the different slices of state , and action that can change that data 
    // that are used by redux then to construct an overll store of data and actions 
    reducer:{
       favoriteMeals: favoritesSlice
    }
})