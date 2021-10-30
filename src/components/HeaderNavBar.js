import React from "react";
import { Link } from "react-router-dom";
import classes from "./HeaderNavBar.module.css";

function HeaderNavBar() {
	return (
		<section className={classes.container}>
			<div className={classes.title}>
				<h1> Weather App by Boris Molotsky</h1>
			</div>
			<div className={classes.buttons}>
				<Link to="/">
					<button>Home</button>
				</Link>
				<Link to="/favorites">
					<button>Favorite</button>
				</Link>
			</div>
		</section>
	);
}

export default HeaderNavBar;
