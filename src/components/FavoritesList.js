import React from "react";
import FavoriteCard from "./FavoriteCard";
import { getFavorites } from "../utils/ManageFavorites";
import classes from "./FavoritesList.module.css";
import { Col } from "react-bootstrap";

function FavoritesList() {
	const favorites = getFavorites();
	return (
		<section className={classes.container}>
			<div className={classes.list}>
				{!favorites.length
					? ""
					: favorites.map((x) => (
							<Col md={3} key={x.key}>
								<FavoriteCard
									city={x.city}
									icon={x.icon}
									temp={x.temp}
									text={x.text}
								/>
							</Col>
					  ))}
			</div>
		</section>
	);
}

export default FavoritesList;
