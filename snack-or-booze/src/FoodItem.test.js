import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import "@testing-library/jest-dom";
import Item from "./FoodItem";

test("renders FoodItem component", () => {
	const item = {
		id: "1",
		name: "Chips",
		description: "Tasty chips",
		recipe: "Recipe",
		serve: "Serve",
	};
	render(
		<MemoryRouter initialEntries={["/snacks/1"]}>
			<Route path="/snacks/:id">
				<Item items={[item]} cantFind="/not-found" />
			</Route>
		</MemoryRouter>
	);

	expect(screen.getByText(/tasty chips/i)).toBeInTheDocument();
	const recipeElements = screen.getAllByText(/recipe/i);
	expect(recipeElements[0]).toBeInTheDocument();
	const serveElements = screen.getAllByText(/serve/i);
	expect(serveElements[0]).toBeInTheDocument();
});

test("redirects to not-found when item is not found", () => {
	render(
		<MemoryRouter initialEntries={["/snacks/1"]}>
			<Route path="/snacks/:id">
				<Item items={[]} cantFind="/not-found" />
			</Route>
			<Route path="/not-found">
				<div>Not Found</div>
			</Route>
		</MemoryRouter>
	);

	expect(screen.getByText(/not found/i)).toBeInTheDocument();
});
