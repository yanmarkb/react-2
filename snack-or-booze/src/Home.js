import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ snacks, drinks }) {
	return (
		<section className="col-md-8">
			<Card>
				<CardBody className="text-center">
					<CardTitle>
						<h3 className="font-weight-bold">Welcome to Snack or Booze!</h3>
					</CardTitle>
					<p>
						We have {snacks.length} snacks and {drinks.length} drinks!
					</p>
				</CardBody>
			</Card>
		</section>
	);
}

export default Home;
