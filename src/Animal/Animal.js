import React  from 'react';
import './Animal.css'


const Animal = ({data,adoptFunction, buttonDisabled}) => {
  

  return (
    <div className="animal" id={data.id}>
      <img className="animal-photo" src={data.imageURL} alt={`img of ${data.description}`}/>
      <h3 className="name">Name: {data.name}</h3>
      <p className='breed'>Breed: {data.breed}</p>
      <p className="age">Age: {data.age}</p>
      <p className="sex">Sex: {data.sex}</p>
      <p classNamen="story">{data.story}</p>
      <input className="animal-button" type="button" value={buttonDisabled ? "waiting on other users" :"adopt me"}  disabled={buttonDisabled} onClick={adoptFunction}/>
    </div>
  )
}

export default Animal;