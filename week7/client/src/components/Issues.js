import React from 'react'
import IssueForm from './IssueForm'

export default function Issue(props){
    console.log(props,"props inside of issues")
    return (
        <div className= 'issue'>

<br></br>
<h1>{props.title}</h1>
<p>{props.description}</p>

        </div>
    )
}