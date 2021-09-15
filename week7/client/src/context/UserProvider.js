import React, { useState } from 'react'
import axios from 'axios'
export const UserContext = React.createContext()

const userAxios = axios.create()
userAxios.interceptors.request.use(config =>{
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {
    const initState = {
        user:JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || "",
        issues:[],
        errMsg: ''
    }   
    const [userState, setUserState] = useState(initState)

    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg: ""
        }))
    }

    function signup(credentials) {
        axios.post('/auth/signup', credentials)
            .then (res =>{
                const { user, token } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch (err => handleAuthErr(err.response.data.errMsg))
    }

    function login(credentials) {
        axios.post('/auth/login', credentials)
        .then (res =>{
            const { user, token } = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            getUserIssue()
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })

            .catch (err => handleAuthErr(err.response.data.errMsg))
    }
    
    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: {},
            token: '',
            issues: []
        })
    }

    function addIssue(newIssue) {

        console.log('newIssue: ', newIssue)

        userAxios.post('/api/issues', newIssue)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issues: [...prevState.issues, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))

    }

    function getUserIssue(newIssue) {
        userAxios.get('/api/Issues/user')
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                issues: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))

    }



    return (
        <UserContext.Provider value={ { ...userState, signup, login, logout, addIssue, resetAuthErr } }>
            { props.children }
        </UserContext.Provider>
    )
}