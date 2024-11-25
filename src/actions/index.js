import { FETCH_CITIES } from "./types";

export const fetchCities = (payload) => ({
    type: FETCH_CITIES,
    payload: data
})

export const fetchData = (searchTerm) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`http://localhost:8080/api/cities/all?name=${searchTerm}`);
        const data = await response.json();
        dispatch(fetchDataSuccess(data));
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    };
  };
