import React, { useState } from "react";
import SnackOrBoozeApi from "./Api";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function AddItem() {
	const [formData, setFormData] = useState({
		type: "snacks",
		name: "",
		description: "",
		recipe: "",
		serve: "",
	});

	const history = useHistory();

	function handleChange(evt) {
		const { name, value } = evt.target;
		setFormData((fData) => ({
			...fData,
			[name]: value,
		}));
	}

	async function handleSubmit(evt) {
		evt.preventDefault();
		console.log("Form submitted with data: ", formData);
		try {
			const response = await SnackOrBoozeApi.addItem(formData.type, formData);
			console.log("API response: ", response);
			history.push(`/${formData.type}`);
		} catch (err) {
			console.error("Error adding item: ", err);
		}
	}

	return (
		<section>
			<h2>Add a New Item</h2>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label for="type">Type</Label>
					<Input
						type="select"
						name="type"
						id="type"
						value={formData.type}
						onChange={handleChange}>
						<option value="snacks">Snack</option>
						<option value="drinks">Drink</option>
					</Input>
				</FormGroup>
				<FormGroup>
					<Label for="name">Name</Label>
					<Input
						type="text"
						name="name"
						id="name"
						value={formData.name}
						onChange={handleChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="description">Description</Label>
					<Input
						type="text"
						name="description"
						id="description"
						value={formData.description}
						onChange={handleChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="recipe">Recipe</Label>
					<Input
						type="text"
						name="recipe"
						id="recipe"
						value={formData.recipe}
						onChange={handleChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="serve">Serve</Label>
					<Input
						type="text"
						name="serve"
						id="serve"
						value={formData.serve}
						onChange={handleChange}
					/>
				</FormGroup>
				<Button type="submit">Add Item</Button>
			</Form>
		</section>
	);
}

export default AddItem;
