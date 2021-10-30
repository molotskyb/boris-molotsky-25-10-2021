import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { locationAutocompleteSearch } from "../store/actions/acuuWeatherApiActions";
import WeatherIcon from "./ui/WeatherIcon";

const FavoriteCard = ({ city, icon, temp, text }) => {
	const dispatch = useDispatch();

	const themeReducer = useSelector(({ themeReducer }) => themeReducer);
	const degreesReducer = useSelector(({ degreesReducer }) => degreesReducer);

	let history = useHistory();

	const handleShowMore = () => {
		dispatch(locationAutocompleteSearch(city));
		history.push("/");
	};

	return (
		<Card
			className="mx-auto text-center shadow"
			style={{ border: "none", borderRadius: "20px" }}
			bg={themeReducer.theme ? "light" : "dark"}
			text={themeReducer.theme ? "dark" : "light"}
		>
			<Card.Header>
				<h4>{city}</h4>
			</Card.Header>
			<Card.Body>
				<WeatherIcon number={icon} width={50} />
				<br />
				<small>{text}</small>
				<p>
					{degreesReducer.degrees
						? parseInt(temp)
						: parseInt((temp * 9) / 5 + 32)}{" "}
					{degreesReducer.degrees ? "°C" : "°F"}
				</p>
			</Card.Body>
			<Button
				variant={themeReducer.theme ? "light" : "dark"}
				onClick={handleShowMore}
			>
				Show More
			</Button>
		</Card>
	);
};

export default FavoriteCard;
