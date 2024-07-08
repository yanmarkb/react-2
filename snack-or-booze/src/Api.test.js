import axios from "axios";
import SnackOrBoozeApi from "./Api";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

describe("SnackOrBoozeApi", () => {
	afterEach(() => {
		mock.reset();
	});

	test("should fetch snacks", async () => {
		const snacks = [{ id: 1, name: "Chips" }];
		mock.onGet("http://localhost:5000/snacks").reply(200, snacks);

		const result = await SnackOrBoozeApi.getSnacks();
		expect(result).toEqual(snacks);
	});

	test("should fetch drinks", async () => {
		const drinks = [{ id: 1, name: "Coke" }];
		mock.onGet("http://localhost:5000/drinks").reply(200, drinks);

		const result = await SnackOrBoozeApi.getDrinks();
		expect(result).toEqual(drinks);
	});

	test("should add an item", async () => {
		const newItem = { name: "Pepsi", description: "A refreshing drink" };
		mock.onPost("http://localhost:5000/drinks").reply(201, newItem);

		const result = await SnackOrBoozeApi.addItem("drinks", newItem);
		expect(result).toEqual(newItem);
	});
});
