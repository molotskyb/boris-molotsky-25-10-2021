import axios from "axios";
import { myApiKey } from "../../config/config";

let accuWeatherApiKey = myApiKey;

//// Thunk:
export const listAutocompleteSearch = (searchWord) => async (dispatch) => {
	try {
		const { data } = await axios.get(
			`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${accuWeatherApiKey}&q=${searchWord}`
		);

		dispatch({
			type: "AUTOCOMPLETE_SEARCH_LIST_SUCCESS",
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: "AUTOCOMPLETE_SEARCH_LIST_FAIL",
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const locationAutocompleteSearch = (searchWord) => async (dispatch) => {
	try {
		const { data } = await axios.get(
			`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${accuWeatherApiKey}&q=${searchWord}`
		);

		dispatch({
			type: "AUTOCOMPLETE_SEARCH_LOCATION_SUCCESS",
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: "AUTOCOMPLETE_SEARCH_LOCATION_FAIL",
			payload: error.message,
		});
	}
};

export const conditionCurrent = (key) => async (dispatch) => {
	try {
		const { data } = await axios.get(
			`https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${accuWeatherApiKey}`
		);

		dispatch({
			type: "CURRENT_CONDITION_SUCCESS",
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: "CURRENT_CONDITION_FAIL",
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const conditionFiveDays = (key) => async (dispatch) => {
	try {
		const { data } = await axios.get(
			`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${accuWeatherApiKey}&metric=true`
		);

		dispatch({
			type: "FIVE_DAYS_CONDITION_SUCCESS",
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: "FIVE_DAYS_CONDITION_FAIL",
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
