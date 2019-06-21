import React, { useState } from 'react';
import './Info.css'
const welcomeText = <div className="welcome-text"><h1>Welcome</h1><h1>To</h1><h1>Petful</h1></div>

const infoText = `You can join a queue to adopt a pet. Keep in mind that after adopting a dog or a cat, you will need to rejoin the queue to adopt an animal of the same type. Of course, you can still adopt the other animal whil you wait.`

const Info = ({disableModal}) => {
  const [view, setView] =useState(0)

  const buttonHandler = () =>{
    if (view === 0){
      setView(1);
      return
    }
    disableModal();
  }


  return (
  <div className="modal-box">
    <div className="text-container">
    {view === 0 ? welcomeText : infoText}
    </div>
    <div className="button-container"><button className="lets-go-btn" onClick={buttonHandler}>{view === 0 ? "begin" : "Let's go!"}</button></div>
    
  </div>  
  )

}

export default Info