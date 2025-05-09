import { createSlice} from '@reduxjs/toolkit';

const favoritesSlice =createSlice({
    name:'favorites',
    initialState:{
        ids:[]
    },
    // are functions that are used to change out state , not added to initial state as context
    reducers:{
        // every method defined as reducer will automatically get the latest state as an input
        addFavorite:(state , action)=> {
            state.ids.push(action.payload.id);
        },
        removeFavorite:(state , action)=> {
            state.ids.splice(state.ids.indexOf(action.payload.id) , 1);

        },

    }
});

export const addFavorite=favoritesSlice.actions.addFavorite;
export const removeFavorite=favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer ;
 