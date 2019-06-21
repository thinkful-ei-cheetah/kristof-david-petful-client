import React  from 'react';
import './Animal.css'
import petfulService from '../Services/petful-services'




const Animal = ({data,adoptFunction, buttonDisabled, getNext}) => {
  

  return (
    <div className="animal" id={data.id}>
      <img className="animal-photo" src={data.imageURL} alt={`img of ${data.description}`}/>
      <h3 className="name">Name: {data.name}</h3>
      <p className='breed'>Breed: {data.breed}</p>
      <p className="age">Age: {data.age}</p>
      <p className="sex">Sex: {data.sex}</p>
      <p className="story">{data.story}</p>
      <input className="animal-button" type="button" value="adopt me"  disabled={buttonDisabled} onClick={adoptFunction}/>
    </div>
  )
}

export default Animal;