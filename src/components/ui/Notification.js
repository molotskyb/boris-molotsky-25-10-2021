import React from "react";
import classes from "./Notification.module.css";

function Notification(props) {
	let specialClasses = "";

	if (props.status === "error") {
		specialClasses = classes.error;
	}

	const cssClasses = `${classes.notification} ${specialClasses}`;

	return (
		<section className={cssClasses}>
			<p> {props.message}</p>
		</section>
	);
}

export default Notification;
