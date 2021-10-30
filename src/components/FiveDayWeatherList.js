import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { conditionFiveDays } from "../store/actions/acuuWeatherApiActions";
import FiveDayWeatherCard from "./FiveDayWeatherCard";
import classes from "./FiveDayWeatherList.module.css";

function FiveDayWeatherList() {
	const dispatch = useDispatch();

	const autocompleteSearchLocationReducer = useSelector(
		({ autocompleteSearchLocationReducer }) => autocompleteSearchLocationReducer
	);

	const fiveDaysConditionReducer = useSelector(
		({ fiveDaysConditionReducer }) => fiveDaysConditionReducer
	);

	const { fiveDaysCondition } = fiveDaysConditionReducer;

	const { DailyForecasts } = fiveDaysCondition;

	useEffect(() => {
		if (!autocompleteSearchLocationReducer.location.length) {
			dispatch(conditionFiveDays("215854"));
		} else {
			dispatch(
				conditionFiveDays(autocompleteSearchLocationReducer.location[0].Key)
			);
		}
	}, [autocompleteSearchLocationReducer, dispatch]);

	return (
		<section className={classes.container}>
			{!DailyForecasts
				? ""
				: DailyForecasts.map((x) => (
						<div className={classes.body}>
							<FiveDayWeatherCard
								date={x.Date}
								dayIcon={x.Day.Icon}
								nightIcon={x.Night.Icon}
								minTemp={x.Temperature.Minimum.Value}
								maxTemp={x.Temperature.Maximum.Value}
							/>
						</div>
				  ))}
		</section>
	);
}

export default FiveDayWeatherList;
