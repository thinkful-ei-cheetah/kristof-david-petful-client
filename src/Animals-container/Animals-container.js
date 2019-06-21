import React, { useEffect, useState } from 'react';
import Animal from '../Animal/Animal'
import petfulService from '../Services/petful-services'



const AnimalsContainer = () => {

  const [dogData, setdogData] = useState({})
  const [catData, setcatData] = useState({})

   useEffect( ()=>{
    grabData()
    
  },[])

  const grabData = async () =>{
    const dogData =  await petfulService.peekDog()
    const catData =  await petfulService.peekCat()
    setdogData(dogData)
    setcatData(catData)
  }

 // console.log(dogData)
  return (
    <div className="animals-container">
      <Animal data={dogData}/>
      <Animal data={catData}/>
    </div>
  )
}

export default AnimalsContainer