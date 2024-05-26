import React from "react";
import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import CardsX6 from "./CardsX6.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
	  <div>
		<NavBar />
		<Jumbotron />
		<CardsX6 />
		<Footer />	
	  </div>
	);
  };

export default Home;
