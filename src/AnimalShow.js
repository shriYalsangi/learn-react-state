import "./AnimalShow.css";
import { useState } from "react";
import Bird from "./svg/bird.svg";
import Cat from "./svg/cat.svg";
import Cow from "./svg/cow.svg";
import Dog from "./svg/dog.svg";
import Gator from "./svg/gator.svg";
import Horse from "./svg/horse.svg";
import Heart from "./svg/heart.svg";

const svgMap = {
    bird: Bird,
    cat: Cat,
    cow: Cow,
    dog: Dog,
    gator: Gator,
    horse: Horse
}

const AnimalShow = ({ type }) => {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    }

    return (
    <div onClick={handleClick} className="animal-show">
        <img src={svgMap[type]} alt={type} className="animal" />
        <img 
            src={Heart} 
            alt="heart"
            style={{ width: 10 + 10 * clicks + 'px'}}
            className="heart"
        />
    </div>);
}

export default AnimalShow;
