import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./App.module.css";
import HeaderNavBar from "./components/HeaderNavBar";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
	const themeReducer = useSelector(({ themeReducer }) => themeReducer);

	return (
		<section
			className={
				themeReducer.theme
					? classes["container-light"]
					: classes["container-dark"]
			}
		>
			<div className={classes.header}>
				<HeaderNavBar />
			</div>
			<div className={classes.body}>
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
