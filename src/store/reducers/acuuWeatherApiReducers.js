export const autocompleteSearchListReducer = (
	state = { locations: [] },
	action
) => {
	switch (action.type) {
		case "AUTOCOMPLETE_SEARCH_LIST_SUCCESS":
			return {
				locations: action.payload,
			};
		case "AUTOCOMPLETE_SEARCH_LIST_FAIL":
			return { error: action.payload };
		default:
			return state;
	}
};

export const autocompleteSearchLocationReducer = (
	state = { location: [] },
	action
) => {
	switch (action.type) {
		case "AUTOCOMPLETE_SEARCH_LOCATION_SUCCESS":
			return {
				location: action.payload,
			};
		case "AUTOCOMPLETE_SEARCH_LOCATION_FAIL":
			return { error: action.payload };
		default:
			return state;
	}
};

export const currentConditionReducer = (
	state = { currentCondition: [] },
	action
) => {
	switch (action.type) {
		case "CURRENT_CONDITION_SUCCESS":
			return {
				currentCondition: action.payload,
			};
		case "CURRENT_CONDITION_FAIL":
			return { error: action.payload };
		default:
			return state;
	}
};

export const fiveDaysConditionReducer = (
	state = { fiveDaysCondition: {} },
	action
) => {
	switch (action.type) {
		case "FIVE_DAYS_CONDITION_SUCCESS":
			return {
				fiveDaysCondition: action.payload,
			};
		case "FIVE_DAYS_CONDITION_FAIL":
			return { error: action.payload };
		default:
			return state;
	}
};
