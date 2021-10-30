import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { conditionCurrent } from "../store/actions/acuuWeatherApiActions";
import { Button } from "react-bootstrap";
import { Snackbar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import WeatherIcon from "./ui/WeatherIcon";
import {
	addFavorite,
	getFavorites,
	removeFavorite,
	checkIfFavoriteExist,
} from "../utils/ManageFavorites";
import classes from "./CurrentWeatherCard.module.css";

function CurrentWeatherCard() {
	const [open, setOpen] = useState(false);
	const [favIcon, setFavIcon] = useState(false);

	const dispatch = useDispatch();

	const themeReducer = useSelector(({ themeReducer }) => themeReducer);
	const degreesReducer = useSelector(({ degreesReducer }) => degreesReducer);

	const autocompleteSearchLocationReducer = useSelector(
		({ autocompleteSearchLocationReducer }) => autocompleteSearchLocationReducer
	);
	const currentConditionReducer = useSelector(
		({ currentConditionReducer }) => currentConditionReducer
	);

	const favorites = getFavorites();

	useEffect(() => {
		if (!autocompleteSearchLocationReducer.location.length) {
			//dispatch tel aviv 215854
			dispatch(conditionCurrent("215854"));
			setFavIcon(checkIfFavoriteExist("215854"));
		} else {
			//dispatch autocompleteSearchLocationReducer.location[0].Key
			dispatch(
				conditionCurrent(autocompleteSearchLocationReducer.location[0].Key)
			);
			setFavIcon(
				checkIfFavoriteExist(autocompleteSearchLocationReducer.location[0].Key)
			);
		}
	}, [autocompleteSearchLocationReducer, dispatch]);

	const handleFavorite = () => {
		let location = {
			key: !autocompleteSearchLocationReducer.location.length
				? "215854"
				: autocompleteSearchLocationReducer.location[0].Key,
			city: !autocompleteSearchLocationReducer.location.length
				? "Tel Aviv"
				: autocompleteSearchLocationReducer.location[0].LocalizedName,
			temp: currentConditionReducer.currentCondition[0].Temperature.Metric
				.Value,
			icon: currentConditionReducer.currentCondition[0].WeatherIcon,
			text: currentConditionReducer.currentCondition[0].WeatherText,
		};
		if (!favorites.length) {
			addFavorite(location);
			setOpen(true);
			setFavIcon(true);
		} else {
			if (checkIfFavoriteExist(location.key)) {
				removeFavorite(location.key);
				setOpen(true);
				setFavIcon(false);
			} else {
				addFavorite(location);
				setOpen(true);
				setFavIcon(true);
			}
		}
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	return (
		<section className={classes.container}>
			<div className={classes.header}>
				<h1>
					{!autocompleteSearchLocationReducer.location.length
						? "Tel Aviv"
						: autocompleteSearchLocationReducer.location[0].LocalizedName}
				</h1>
			</div>
			<div className={classes.btn}>
				<Button
					variant="outline-light"
					style={{
						fontSize: "16px",
						// borderRadius: "50px",
						border: "none",
					}}
					onClick={handleFavorite}
				>
					{favIcon ? <p>In Favorites</p> : <p>Add To Favorites</p>}
					{favIcon ? <DoneOutlineIcon /> : <FavoriteBorderIcon />}
				</Button>
				<Snackbar
					open={open}
					autoHideDuration={2000}
					onClose={handleClose}
					message="Favorites updated"
				></Snackbar>
			</div>
			<div className={classes.body}>
				{!currentConditionReducer.currentCondition.length ? (
					""
				) : (
					<WeatherIcon
						number={currentConditionReducer.currentCondition[0].WeatherIcon}
						width={200}
					/>
				)}
			</div>
			<div className={classes.temp}>
				<h1>
					{!currentConditionReducer.currentCondition.length
						? ""
						: degreesReducer.degrees
						? parseInt(
								currentConditionReducer.currentCondition[0].Temperature.Metric
									.Value
						  )
						: parseInt(
								(currentConditionReducer.currentCondition[0].Temperature.Metric
									.Value *
									9) /
									5 +
									32
						  )}{" "}
					{degreesReducer.degrees ? "°C" : "°F"}
				</h1>
			</div>
			<div className={classes.condition}>
				<p>
					{!currentConditionReducer.currentCondition.length
						? ""
						: currentConditionReducer.currentCondition[0].WeatherText}
				</p>
			</div>
		</section>
	);
}

export default CurrentWeatherCard;
