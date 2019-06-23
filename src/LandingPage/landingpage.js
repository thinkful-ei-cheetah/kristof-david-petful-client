import React from 'react';


const LandingPage = ({history}) => {

  return (
  <div>
    <h1>Welcome to Petful</h1>
    <p>You can join a queue to adopt a pet. Keep in mind that after adopting a dog or a cat, you will need to rejoin the queue to adopt an animal of the same type. Of course, you can still adopt the other animal whil you wait.
    </p>
    <input type="button" value="Let's Go" onClick={() => {history.push('/adopt')}}/>
  </div>
  )

}

export default LandingPage;