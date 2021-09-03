import React from 'react'
import Issues from './Issues'

export default function IssueList(props){
    const {issues} = props
    return (
        <div classaname='issue-list'>
            {issues.map(issue => <Issue {...issue} key={issue._id} />) }
        </div>
    )
}