/* eslint-disable no-case-declarations */
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions";


const initialState = {
  myFavorites: [],
  allCharacters: [],
  characterDetail: {}
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        // case ADD_FAV:
        //     return {...state, 
        //         allCharacters: [...state.allCharacters, action.payload],
        //         myFavorites: [...state.myFavorites, action.payload]}
        case ADD_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        // case REMOVE_FAV:
        //     return {...state, myFavorites: state.myFavorites.filter(
        //         (char) => char.id !== action.payload), allCharacters: state.myFavorites.filter(
        //             (char) => char.id !== action.payload),
        //     }
        case REMOVE_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        case FILTER:
                // eslint-disable-next-line no-case-declarations
                const originalCharacters = [...state.allCharacters];
                // eslint-disable-next-line no-case-declarations
                const filteredCharacters = [...state.allCharacters].filter(
                  (char) => char.gender === action.payload
                );
                if(action.payload === 'All'){
                    return {...state, myFavorites: originalCharacters}
                } else {
                return {
                  ...state, myFavorites: filteredCharacters
                }}
        case ORDER:
            
            const ascendingOrderChar = [...state.myFavorites].sort((a, b) => a.id - b.id)
            const ascendingOrderBase = [...state.allCharacters].sort((a, b) => a.id - b.id)
            
            const descendingOrderChar = [...state.myFavorites].sort((a, b) => b.id - a.id)
            const descendingOrderBase = [...state.allCharacters].sort((a, b) => b.id - a.id)
            if (action.payload === 'A'){
                return{...state, myFavorites: ascendingOrderChar, allCharacters: ascendingOrderBase}
            } if (action.payload === 'B'){
                return {...state, myFavorites: descendingOrderChar, allCharacters: descendingOrderBase}
            } else {return {...state}}
        // eslint-disable-next-line no-fallthrough
        default:
            return {...state}
    }
}

export default rootReducer;