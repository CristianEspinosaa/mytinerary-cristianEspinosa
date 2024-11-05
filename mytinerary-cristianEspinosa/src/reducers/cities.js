import { SET_CITIES } from "../actions/types";

const initialState = {
    cities: [],
}

export const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITIES:
            return {...state, cities: action.payload}

        default:
            return state
    }
}