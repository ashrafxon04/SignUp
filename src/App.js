import React, {useState} from 'react';
import SignIn from './components/SignIn/';
import SignUp from './components/SignUp/';

const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(true)


  const handleSignIn = () => {
    setIsLoggedin(false)
  }

  const handleSignUp = () => {
    setIsLoggedin(true)
  }

  return (
    <div>
      {
        isLoggedin 
        ?
        <SignIn click = {handleSignIn}/>
        :
        <SignUp click = {handleSignUp}/> 
      }
    </div>
  )
}

export default App
