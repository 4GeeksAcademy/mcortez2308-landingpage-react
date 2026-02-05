import React from "react";

//include images into your bundle
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import CardList from "./CardList";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<CardList />
		</>
	);
};

export default Home;