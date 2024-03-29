import Favorites from "../components/Favorites"
import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from "./action-type"


const initialState = {
    myFavorites: [],
    allFavorites: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAV:
            return { 
                ...state, 
                myFavorites: action.payload, 
                allFavorites: action.payload 
            };

        case REMOVE_FAV:
            return { 
                ...state, 
                myFavorites: action.payload 
                };
        
        case FILTER:
            const filterByGender = [...state.allFavorites].filter
            ((favorite) => {
                return favorite.gender === action.payload
            })
            return{
                ...state,
                myFavorites: filterByGender
            }

            case ORDER:
                const favoritesOrdered = action.payload === "A"
                ? [...state.myFavorites].sort((a, b) => a.id - b.id)
                : [...state.myFavorites].sort((a, b) => b.id - a.id);
                
                return{
                    ...state,
                    myFavorites: favoritesOrdered
                }
        default: 
            return {
                ...state
            }
    }
}

export default reducer; 