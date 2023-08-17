export const ADD_FAV ='ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV'

export const addFav = (chart) => {
    return {
        type: ADD_FAV,
        payload : chart
    }
}

export const removeFav= (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}