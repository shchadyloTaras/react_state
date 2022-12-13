import './App.css';
import AnimalShow from './components/AnimalShow';
import React, {useState} from 'react';


function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}


function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = (e) => {
    setAnimals([...animals, getRandomAnimal()]);
  }

  const renderAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index}/>
  });

  return (
    <div className="app">
      <div className="container">
        <button className="btn" onClick={handleClick}>Add Animal</button>
        <div className="render-animals">{renderAnimals}</div>
      </div>
    </div>
  );
}

export default App;
