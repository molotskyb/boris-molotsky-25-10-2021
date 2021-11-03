import React from "react";

import weather from "../../images/icons/weather.svg";
import night from "../../images/icons/night.svg";
import cloudy from "../../images/icons/cloudy.svg";
import snowy from "../../images/icons/snowy.svg";
import thunder from "../../images/icons/thunder.svg";
import rainy from "../../images/icons/rainy.svg";
import sunny from "../../images/icons/sunny.svg";

const WeatherIcon = ({ number, width }) => {
	return (
		// number-- icon number return from api
		<>
			{number >= 0 && number < 6 ? (
				//sunny
				<img
					alt="weather"
					src={sunny}
					width={width}
					style={{ borderRadius: "5px" }}
				/>
			) : number >= 6 && number < 12 ? (
				//cloudy
				<img
					alt="weather"
					src={cloudy}
					width={width}
					style={{ borderRadius: "5px" }}
				/>
			) : number >= 12 && number < 19 ? (
				//rain
				<img
					alt="weather"
					src={rainy}
					width={width}
					style={{ borderRadius: "5px" }}
				/>
			) : number >= 19 && number < 33 ? (
				//snow
				<img
					alt="weather"
					src={snowy}
					width={width}
					style={{ borderRadius: "5px" }}
				/>
			) : number >= 33 && number < 39 ? (
				//night
				<img
					alt="weather"
					src={night}
					width={width}
					style={{ borderRadius: "5px" }}
				/>
			) : number >= 39 && number < 44 ? (
				//storm
				<img
					alt="weather"
					src={thunder}
					width={width}
					style={{ borderRadius: "5px" }}
				/>
			) : (
				//general weather
				<img
					alt="weather"
					src={weather}
					width={width}
					style={{ borderRadius: "5px" }}
				/>
			)}
		</>
	);
};

export default WeatherIcon;
