export const notificationReducer = (
	state = { status: [], message: [] },
	action
) => {
	switch (action.type) {
		case "AUTOCOMPLETE_SEARCH_LIST_FAIL":
			return { status: "error", message: action.payload };

		case "AUTOCOMPLETE_SEARCH_LOCATION_FAIL":
			return { status: "error", message: action.payload };

		case "CURRENT_CONDITION_FAIL":
			return { status: "error", message: action.payload };

		case "FIVE_DAYS_CONDITION_FAIL":
			return { status: "error", message: action.payload };

		default:
			return state;
	}
};
