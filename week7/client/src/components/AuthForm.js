// login and signup
import React from 'react'

export default function AuthForm(props){
    const {
        handleChange,
        handleSubmit,
        errMsg,
        inputs: {
            username,
            password
        },
        btnText
    } = props
    console.log("errMsg:", errMsg)
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={username}
            name="username"
            onChange={handleChange}
            placeholder="username"
            />
             <input
            type="text"
            value={password}
            name="password"
            onChange={handleChange}
            placeholder="password"
            />
            <button>{btnText}</button>
            <p style={{backgroundColor: "#FF0000", color: "#ffffff",textAlign:"center"}}>{errMsg}</p>
          </form>
    )
}