import React from 'react'
import IssueForm from './IssueForm'

export default function Issue(props){
    console.log(props)
    return (
        <div className= 'issue'>
<h1>Issues</h1>
<br></br>
<h1>{props.title}</h1>
<p>{props.decription}</p>

        </div>
    )
}