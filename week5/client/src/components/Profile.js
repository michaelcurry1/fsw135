import React,{ useContex} from 'react'
import { UserContext } from '../context/UserProvider'
import IssueForm from 'IssueForm.js'
import IssueList from 'IssueList.js'


export default function Profile(){
    const { user: {username}, addIssue, issues } = useContext(UserContext)
    return (
        <div>
            <h1>WELCOME{username}!</h1>
            <h3>Add A Issue</h3>
            <IssueForm addIssue={addIssue}/>
            <h3>Your Issue</h3>
            <IssueList issue={issues}/>
        </div>
    )
}