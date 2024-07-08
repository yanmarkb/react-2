import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddItem from "./AddItem";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import SnackOrBoozeApi from "./Api";

jest.mock("./Api");

test("renders AddItem form and submits new item", async () => {
	const history = createMemoryHistory();
	SnackOrBoozeApi.addItem.mockResolvedValue({});

	render(
		<Router history={history}>
			<AddItem />
		</Router>
	);

	fireEvent.change(screen.getByLabelText(/name/i), {
		target: { value: "Pepsi" },
	});
	fireEvent.change(screen.getByLabelText(/description/i), {
		target: { value: "A refreshing drink" },
	});
	fireEvent.change(screen.getByLabelText(/recipe/i), {
		target: { value: "Recipe details" },
	});
	fireEvent.change(screen.getByLabelText(/serve/i), {
		target: { value: "Serve details" },
	});

	fireEvent.click(screen.getByText(/add item/i));

	await waitFor(() => {
		expect(SnackOrBoozeApi.addItem).toHaveBeenCalledWith("snacks", {
			type: "snacks",
			name: "Pepsi",
			description: "A refreshing drink",
			recipe: "Recipe details",
			serve: "Serve details",
		});
		expect(history.location.pathname).toBe("/snacks");
	});
});
