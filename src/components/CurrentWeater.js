import React from "react";
import classes from "./CurrentWeather.module.css";
import SearchLocation from "./SearchLocation";
import CurrentWeatherCard from "./CurrentWeatherCard";
import FiveDayWeatherList from "./FiveDayWeatherList";

function CurrentWeather() {
	return (
		<section className={classes.container}>
			<div className={classes.searchfield}>
				<SearchLocation />
			</div>
			<div className={classes["current-weather-card"]}>
				<CurrentWeatherCard />
			</div>
			<div className={classes["five-day-list"]}>
				<FiveDayWeatherList />
			</div>
		</section>
	);
}

export default CurrentWeather;
