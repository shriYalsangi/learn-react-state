import "bulma/css/bulma.css";
import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

const getRandomAnimal = () => {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)]
}

const App = () => {
    const [animals, setAnimals] = useState([])

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    });

    return (
    <div className="container app"> 
        <button className="button is-primary is-light is-medium" onClick={handleClick}>Add Animal</button>
        <div className="animal-list">
           {renderedAnimals}
        </div>
    </div>
    )
}

export default App;
