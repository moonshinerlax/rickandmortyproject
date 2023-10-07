import axios from "axios"
export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'
export const GET_CHARACTER_DETAIL = 'GET_CHARACTER_DETAIL'



// export const addFav = (myFavorite) => {
//     return {
//         type: ADD_FAV,
//         payload: myFavorite
//     }
// }

export const addFav =  (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
      return async (dispatch) => {  
         try {
            const { data } = await axios.post(endpoint, character)
            dispatch({
                  type: 'ADD_FAV',
                  payload: data,
               });     
            } catch (error) {
               throw new Error(error.message)
         }  
      };
   };

// export const removeFav = (id) => {
//     return {
//         type: REMOVE_FAV,
//         payload: id
//     }
// }

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
      try {
         const { data } = await axios.delete(endpoint)
          return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
       });   
      } catch (error) {
         throw new Error(error.message)
      } 
    };
 };

export const filter = (gen) => {
    return {
        type: FILTER,
        payload: gen
    }
}

export const order = (ord) => {
    return {
        type: ORDER,
        payload: ord}
}