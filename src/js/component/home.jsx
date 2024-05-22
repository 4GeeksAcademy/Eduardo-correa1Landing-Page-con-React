import React from "react";
import NavBar from "./NavBar.jsx"
import ImagenPrincipal from "./ImagenPrincipal.jsx"
import Cards from "../Cards.jsx";
import CardsX3 from "../CardsX3.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	  <div>
		<NavBar />
		<ImagenPrincipal />
		<CardsX3 />

		
		
		
	  </div>
	);
  };

export default Home;
