import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Menu from "./FoodMenu";
import Item from "./FoodItem";
import AddItem from "./AddItem";
import SnackOrBoozeApi from "./Api";
import "./App.css";

function App() {
	const [snacks, setSnacks] = useState([]);
	const [drinks, setDrinks] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const snacks = await SnackOrBoozeApi.getSnacks();
				const drinks = await SnackOrBoozeApi.getDrinks();
				console.log("Fetched snacks:", snacks);
				console.log("Fetched drinks:", drinks);
				setSnacks(snacks);
				setDrinks(drinks);
			} catch (err) {
				console.error("Error fetching data:", err);
				setError(err.message);
			}
		}
		fetchData();
	}, []);

	if (error) {
		return <div className="error">Error: {error}</div>;
	}

	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<main>
					<Switch>
						<Route exact path="/">
							<Home snacks={snacks} drinks={drinks} />
						</Route>
						<Route exact path="/snacks">
							<Menu items={snacks} title="Snacks" />
						</Route>
						<Route exact path="/drinks">
							<Menu items={drinks} title="Drinks" />
						</Route>
						<Route exact path="/snacks/:id">
							<Item items={snacks} cantFind="/not-found" />
						</Route>
						<Route exact path="/drinks/:id">
							<Item items={drinks} cantFind="/not-found" />
						</Route>
						<Route exact path="/add">
							<AddItem />
						</Route>
						<Redirect to="/" />
					</Switch>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
