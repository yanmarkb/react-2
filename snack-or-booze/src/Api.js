import axios from "axios";

const BASE_URL = "http://localhost:5000";

class SnackOrBoozeApi {
	static async getSnacks() {
		try {
			const result = await axios.get(`${BASE_URL}/snacks`);
			return result.data;
		} catch (error) {
			console.error("Error fetching snacks:", error.response);
			throw error;
		}
	}

	static async getDrinks() {
		try {
			const result = await axios.get(`${BASE_URL}/drinks`);
			return result.data;
		} catch (error) {
			console.error("Error fetching drinks:", error.response);
			throw error;
		}
	}
	static async addItem(type, itemData) {
		try {
			const result = await axios.post(`${BASE_URL}/${type}`, itemData);
			return result.data;
		} catch (error) {
			console.error(`Error adding ${type}:`, error.response);
			throw error;
		}
	}
}

export default SnackOrBoozeApi;
