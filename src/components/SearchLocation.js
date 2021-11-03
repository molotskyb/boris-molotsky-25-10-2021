import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {
	listAutocompleteSearch,
	locationAutocompleteSearch,
} from "../store/actions/acuuWeatherApiActions";

function SearchLocation(props) {
	const dispatch = useDispatch();
	const autocompleteSearchListReducer = useSelector(
		({ autocompleteSearchListReducer }) => autocompleteSearchListReducer
	);

	const themeReducer = useSelector(({ themeReducer }) => themeReducer);

	const handleSearchList = (e) => {
		e.preventDefault();
		if (!e.target.value.startsWith(" ") && e.target.value !== "") {
			dispatch(listAutocompleteSearch(e.target.value));
		}
	};
	const handleSearchLocation = (e, values) => {
		e.preventDefault();
		if (values) {
			dispatch(locationAutocompleteSearch(values.LocalizedName));
		}
	};

	const useStyles = makeStyles((theme) => ({
		root: {
			"& .MuiOutlinedInput-root": {
				"& fieldset": {
					borderColor: `${themeReducer.theme ? "black" : "white"}`,
				},
				"&:hover fieldset": {
					borderColor: `${themeReducer.theme ? "black" : "white"}`,
				},
				"&.Mui-focused fieldset": {
					borderColor: `${themeReducer.theme ? "black" : "white"}`,
				},
			},
			"& .MuiFormLabel-root": {
				color: `${themeReducer.theme ? "black" : "white"}`,
			},
		},
		inputRoot: {
			color: `${themeReducer.theme ? "black" : "white"}`,
		},
	}));

	const classes = useStyles();

	return (
		<div>
			<Autocomplete
				id="weather-location"
				sx={{ width: 300 }}
				classes={classes}
				options={autocompleteSearchListReducer.locations}
				getOptionLabel={(option) =>
					`${option.LocalizedName} , ${option.Country.LocalizedName}`
				}
				onChange={handleSearchLocation}
				fullWidth
				renderInput={(params) => (
					<TextField
						{...params}
						label="Enter location here"
						variant="outlined"
						onChange={handleSearchList}
					/>
				)}
			/>
		</div>
	);
}

export default SearchLocation;
