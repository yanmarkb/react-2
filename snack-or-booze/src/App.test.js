import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import SnackOrBoozeApi from "./Api";

jest.mock("./Api");

test("renders App component", async () => {
	SnackOrBoozeApi.getSnacks.mockResolvedValue([{ id: 1, name: "Chips" }]);
	SnackOrBoozeApi.getDrinks.mockResolvedValue([{ id: 1, name: "Coke" }]);

	render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	);

	await waitFor(() => {
		// Checks for the specific occurrence of "Snack or Booze" in the navbar
		expect(screen.getAllByText(/snack or booze/i)[0]).toBeInTheDocument();
		// Checks for both occurrences of "snacks"
		const snacksOccurrences = screen.getAllByText(/snacks/i);
		expect(snacksOccurrences.length).toBe(2);
		expect(snacksOccurrences[0]).toBeInTheDocument(); // Navbar link
		expect(snacksOccurrences[1]).toBeInTheDocument(); // Paragraph text
		// Checks for drinks link and paragraph using getAllByText
		const drinksOccurrences = screen.getAllByText(/drinks/i);
		expect(drinksOccurrences.length).toBe(2); // Ensures both occurrences are present
		expect(drinksOccurrences[0]).toBeInTheDocument(); // Navbar link
		expect(drinksOccurrences[1]).toBeInTheDocument(); // Paragraph text
	});
});
