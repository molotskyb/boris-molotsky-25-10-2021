import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Switch } from "@mui/material";
import classes from "./HeaderNavBar.module.css";

import { ToggleTheme } from "../store/actions/themeActions";
import { ToggleDegrees } from "../store/actions/degreesActions";

function HeaderNavBar() {
	const themeReducer = useSelector(({ themeReducer }) => themeReducer);
	const dispatch = useDispatch();

	const handleThemeChange = (e) => {
		dispatch(ToggleTheme(e.target.checked));
	};
	const handleDegreesChange = (e) => {
		dispatch(ToggleDegrees(e.target.checked));
	};
	return (
		<section className={classes.container}>
			<div className={classes.title}>
				<h1> Weather App by Boris Molotsky</h1>
			</div>
			<div className={classes.temp}>
				<span>°C</span>
				<Switch color="default" onChange={handleDegreesChange}></Switch>
				<span>°F</span>
			</div>
			<div className={classes.mode}>
				<span>Light</span>
				<Switch color="default" onChange={handleThemeChange}></Switch>
				<span>Dark</span>
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
