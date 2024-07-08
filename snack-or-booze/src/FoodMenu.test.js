import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Menu from "./FoodMenu";

test("renders FoodMenu component", () => {
	const items = [{ id: "1", name: "Chips" }];
	render(
		<MemoryRouter>
			<Menu items={items} title="Snacks" />
		</MemoryRouter>
	);

	expect(screen.getByText(/snacks menu/i)).toBeInTheDocument();
	expect(screen.getByText(/chips/i)).toBeInTheDocument();
});
