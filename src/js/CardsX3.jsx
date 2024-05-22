import React from "react";
import Cards from "./Cards";

const CardsX3 = () =>{
    return(
        <div className="container">
        <div className="row justify-content-center g-3 mt-2">
            <div className=" col-12 col-md-4 ">
        <Cards />
        </div>
        <div className=" col-12 col-md-4 ">
        <Cards />
        </div>
        <div className=" col-12 col-md-4 ">
        <Cards />
        </div>

        </div>
        </div>
    )
}


export default CardsX3