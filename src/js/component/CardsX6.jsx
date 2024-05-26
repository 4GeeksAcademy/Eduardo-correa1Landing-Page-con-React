import React from "react";
import Card from "./Card";
import CardsData from "../CardsData";
const CardsX6 = () =>{
    
    return(
        <div className="container">
            <div className="row justify-content-center g-3 mt-2 mb-2">
                {CardsData.map((card, index) => (
                <div key={index} className="col-12 col-md-4">
                    <Card image={card.image} text={card.text} description={card.description}/>
                </div>
                ))}
            </div>
        </div>
    );
};
export default CardsX6