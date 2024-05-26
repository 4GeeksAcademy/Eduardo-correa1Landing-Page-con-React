import React from "react";
import Card from "./Card";
const CardsX6 = () =>{
    const LasCards = [
        {image: "https://jminyetty.com/wp-content/uploads/2018/03/185310.jpg", text: "Europe: History and Modernity", description: "From the architectural wonders of Rome to the northern landscapes, Europe offers a journey through time"},
        {image: "https://img.freepik.com/premium-photo/abstract-background-africa-creating-eyecatching-banner-design-that-celebrates-diverse-history-africa-generative-ai_198565-7756.jpg", text:"Africa: The Wild Heart", description:"Dive into thrilling safaris, endless deserts, and ancient cultures in the most mysterious continent." },
        {image: "https://wallpapercave.com/wp/wp2466797.jpg", text:"Asia: A Mosaic of Cultures", description: "Explore ancient temples, stunning landscapes, and vibrant cities in the most diverse continent on earth."},
        {image: "https://w0.peakpx.com/wallpaper/647/471/HD-wallpaper-oceania-tree-reef-island-ocean.jpg", text:"Oceania: Paradise on Earth", description:"Explore dreamlike beaches, coral reefs, and unique cultures in the most exotic island-continent."},
        {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6wv88Iy-wCqoexWaoE5aP75KsfhxlUJ9-UQr8EBvejw&s", text:"North America: Innovation and Nature", description:  "From vibrant metropolises to spectacular national parks."},
        {image: "https://wallpapers.com/images/hd/south-america-machu-picchu-peru-izgl4ohkw41e2kab.jpg", text:"South America: Colors and Rhythms", description:"Discover natural wonders, and cultural richness that make an unforgettable destination."},
        ];
    return(
        <div className="container">
            <div className="row justify-content-center g-3 mt-2 mb-2">
                {LasCards.map((card, index) => (
                <div key={index} className="col-12 col-md-4">
                    <Card image={card.image} text={card.text} description={card.description}/>
                </div>
                ))}
            </div>
        </div>
    );
};
export default CardsX6