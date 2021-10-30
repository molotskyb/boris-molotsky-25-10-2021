import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./App.module.css";
import HeaderNavBar from "./components/HeaderNavBar";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
	const themeReducer = useSelector(({ themeReducer }) => themeReducer);

	const style = themeReducer.theme
		? {
				// background: "no-repeat",
				// backgroundSize: "cover",
				// backgroundColor: "#E0F50B ",
				// minHeight: "100vh",
				color: "black",
		  }
		: {
				// background: "no-repeat",
				// backgroundSize: "cover",
				// backgroundColor: "#1c2949",
				// minHeight: "100vh",
				color: "white",
		  };
	return (
		<section className={classes.container}>
			<div className={classes.header}>
				<HeaderNavBar />
			</div>
			<div className={classes.body} style={style}>
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="/favorites">
						<FavoritesPage />
					</Route>
				</Switch>
			</div>
		</section>
	);
}

export default App;
