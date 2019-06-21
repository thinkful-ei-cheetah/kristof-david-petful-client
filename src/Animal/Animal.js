import React from 'react';


const Animal = ({data,imageURL, name, id, sex, age, breed, story, adopted}) => {
  
  const defaultData = {
    name: 'Davida',
    id: 'dfgbdfver9343r34f',
    age: 29,
    sex: 'F',
    breed: 'mutt',
    story: 'Wants to be a princess but is trapped in a dogs body'
  }

  console.log(data)
  
  return (
    <div className="animal" id={defaultData.id}>
      <img className="animal-image" src={data.message} alt={`img of ${defaultData.name}`}/>
      <h3 className="name">Name: {defaultData.name}</h3>
      <p className='breed'>Breed: {defaultData.breed}</p>
      <p className="age">Age: {defaultData.age}</p>
      <p className="sex">Sex: {defaultData.sex}</p>
      <p className="story">{defaultData.story}</p>
    </div>
  )
}

export default Animal