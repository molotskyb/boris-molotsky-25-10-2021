import React from "react";
import { useSelector } from "react-redux";
import { Card, Col, Row } from "react-bootstrap";
import WeatherIcon from "./ui/WeatherIcon";

const FiveDayWeatherCard = ({ date, dayIcon, nightIcon, minTemp, maxTemp }) => {
	const themeReducer = useSelector(({ themeReducer }) => themeReducer);
	const degreesReducer = useSelector(({ degreesReducer }) => degreesReducer);

	return (
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
							{degreesReducer.degrees
								? parseInt(maxTemp)
								: parseInt((maxTemp * 9) / 5 + 32)}{" "}
							{degreesReducer.degrees ? "°C" : "°F"}
						</p>
					</Col>
					<Col xs={6}>
						<WeatherIcon number={nightIcon} width={50} />
						<br />
						<small>NIGHT</small>
						<p>
							{degreesReducer.degrees
								? parseInt(minTemp)
								: parseInt((minTemp * 9) / 5 + 32)}{" "}
							{degreesReducer.degrees ? "°C" : "°F"}
						</p>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default FiveDayWeatherCard;
