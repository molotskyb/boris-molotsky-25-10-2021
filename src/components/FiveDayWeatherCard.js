import React from "react";
import { useSelector } from "react-redux";
import { Card, Col, Row } from "react-bootstrap";
import WeatherIcon from "./ui/WeatherIcon";
import classes from "./FiveDayWeatherCard.module.css";

const FiveDayWeatherCard = ({ date, dayIcon, nightIcon, minTemp, maxTemp }) => {
	const themeReducer = useSelector(({ themeReducer }) => themeReducer);
	const degreesReducer = useSelector(({ degreesReducer }) => degreesReducer);

	const celsiusTemp = parseInt(maxTemp);
	const fahrenheitTemp = parseInt((minTemp * 9) / 5 + 32);

	return (
		<section className={classes.container}>
			<Card
				className="mx-auto text-center shadow"
				style={{ border: "none", borderRadius: "20px" }}
				bg={themeReducer.theme ? "light" : "dark"}
				text={themeReducer.theme ? "dark" : "light"}
			>
				<Card.Header>
					<h4>{`${date.slice(5, 10)}`}</h4>
				</Card.Header>
				<Card.Body>
					<Row>
						<Col xs={6}>
							<WeatherIcon number={dayIcon} width={50} />
							<br />
							<small>DAY</small>
							<p>
								{degreesReducer.degrees ? celsiusTemp : fahrenheitTemp}{" "}
								{degreesReducer.degrees ? "°C" : "°F"}
							</p>
						</Col>
						<Col xs={6}>
							<WeatherIcon number={nightIcon} width={50} />
							<br />
							<small>NIGHT</small>
							<p>
								{degreesReducer.degrees ? celsiusTemp : fahrenheitTemp}{" "}
								{degreesReducer.degrees ? "°C" : "°F"}
							</p>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</section>
	);
};

export default FiveDayWeatherCard;
