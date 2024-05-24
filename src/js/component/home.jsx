import React from "react";
import NavBar from "./NavBar.jsx"
import ImagenPrincipal from "./ImagenPrincipal.jsx"
import Cards from "../Cards.jsx";
import CardsX6 from "../CardsX6.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	  <div>
		<NavBar />
		<ImagenPrincipal />
		<CardsX6 />

		
		
		
	  </div>
	);
  };

export default Home;
