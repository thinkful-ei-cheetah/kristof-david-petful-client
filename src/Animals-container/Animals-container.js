import React, { useEffect, useState } from 'react';
import Animal from '../Animal/Animal'
import petfulService from '../Services/petful-services'

const AnimalsContainer = () => {

//initalize state with data and buttons on
  const [dogData, setdogData] = useState({})
  const [catData, setCatData] = useState({})
  const [catButtonDisabled, setCatButton  ] = useState(false)
  const [dogButtonDisabled, setDogButton  ] = useState(false)
  
  useEffect( ()=>{
    //grab the initial cat and dog data
    grabData()
  },[])

   //set up an interval to see if the user is allowed to adopt.
   const createTimer = (callback, value) =>{
    const timer = setInterval(  async () => {
      const correctUser = await petfulService.peekUser()
      if(correctUser){
        grabData();
        clearInterval(timer)
        callback(value);
        return;
      } 

    }, 5000)
  }

  const grabData = async () =>{
    //get data from server and update page
    const dogData =  await petfulService.peekDog()
 
    const catData =  await petfulService.peekCat()
 
    setdogData(dogData)
    setCatData(catData)
  }
  
  const getNextDog= async () => {
    //Peek at next dog from queue and update the state
    const nextDog = petfulService.peekDog()
    //update dog data state with current info
    setdogData(nextDog)
  }

  const getNextCat=() => {
    const nextCat = petfulService.peekCat()
    setCatData(nextCat)
  }

  //adopting functions send delete request, disableButton, set a timer on which to check for data.
  const adoptDog = async () => {
    await petfulService.deleteDog()
    setDogButton(true)
    createTimer(setDogButton, false)
  }

  const adoptCat = async () => {
    await petfulService.deleteCat()
    setCatButton(true)
    console.log('here')
    createTimer(setCatButton, false)
  }

  

  return (
    <div className="animals-container">
      <Animal data={dogData} next={getNextDog} adoptFunction={adoptDog} buttonDisabled={dogButtonDisabled}/>
      <Animal data={catData} next={getNextCat} adoptFunction={adoptCat} buttonDisabled={catButtonDisabled}/>
    </div>
  )
}

export default AnimalsContainer

