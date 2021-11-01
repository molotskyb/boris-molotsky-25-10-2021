import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { themeReducer } from "./reducers/themeReducers";
import { degreesReducer } from "./reducers/degreesReducers";
import { notificationReducer } from "./reducers/notificationReducer";
import {
	autocompleteSearchListReducer,
	autocompleteSearchLocationReducer,
	currentConditionReducer,
	fiveDaysConditionReducer,
} from "./reducers/acuuWeatherApiReducers";

const reducer = combineReducers({
	themeReducer,
	degreesReducer,
	autocompleteSearchListReducer,
	autocompleteSearchLocationReducer,
	currentConditionReducer,
	fiveDaysConditionReducer,
	notificationReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
