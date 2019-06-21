import React, { useState } from 'react';
import Modal from './Modal/Modal'
import './App.css';
import Info from './Info/Info'
import AnimalsContainer from './Animals-container/Animals-container'

function App() {

  const [showModal, setShowModal] = useState('true')
  const disableModal = () => {
    setShowModal(false)
  }

  return (
    <div className="App">
      {showModal && 
      <Modal >
        <Info disableModal={disableModal}/>
      </Modal>}
      <h1 className ="logo">Petful</h1>
      <hr/>
      <AnimalsContainer/>
    
    </div>
  );
}

export default App;
