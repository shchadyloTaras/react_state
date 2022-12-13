import { useState } from 'react'
import './AnimalShow.css';

import bird from '../assets/svg/bird.svg'
import cat from '../assets/svg/cat.svg'
import cow from '../assets/svg/cow.svg'
import dog from '../assets/svg/dog.svg'
import gator from '../assets/svg/gator.svg'
import horse from '../assets/svg/horse.svg'
import heart from '../assets/svg/heart.svg'

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse
}


function AnimalShow({ type }) {

  const [click, setClick] = useState(0)

  const handleClick = () => {
    console.log(setClick(click + 1));
  }

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="img-animal" src={svgMap[type]} alt="animal" />
      <img className="img-heart" src={heart} alt="heart" style={{ width: 10 + 10 * click + 'px'}} />
    </div>
  )
}

export default AnimalShow;