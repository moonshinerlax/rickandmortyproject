
export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'
export const GET_CHARACTER_DETAIL = 'GET_CHARACTER_DETAIL'

export const addFav = (myFavorite) => {
    return {
        type: ADD_FAV,
        payload: myFavorite
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

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