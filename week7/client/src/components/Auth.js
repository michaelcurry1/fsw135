import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm.js'
import { UserContext } from '../context/UserProvider.js'
import Logo from '../Img/rockTheVote.jpg'
const initInputs = { username: "", password: "" }

export default function Auth(){
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)
  console.log(errMsg,"errMsg")
  function handleChange(e){
    const {name, value} = e.target 
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e){
    e.preventDefault()
    signup(inputs)
  }

  function handleLogin(e){
    e.preventDefault()
    login(inputs)
  }

  function toggleForm() {
    setToggle(prev => !prev)
    resetAuthErr()
  }

  return (
    <div className="auth-container">
      <h1>ROCK THE VOTE</h1>
      { !toggle ?
      <>
      
      <AuthForm
      handleChange={handleChange}
      handleSubmit={handleSignup}
      inputs={inputs}
      btnText="Sign Up"
      errMsg={errMsg}
      />
      <button onClick={() => toggleForm()}>Already Have Account</button>
      
    </>
    :
    <>
    <AuthForm
    handleChange={handleChange}
    handleSubmit={handleLogin}
    inputs={inputs}
    btnText="Login"
    errMsg={errMsg}
    />
    <button onClick={() =>toggleForm() }>Not A Member</button>
      </>
}
    <div>
      
      <img src={Logo}/>
      
    </div>
        </div>
  )

}