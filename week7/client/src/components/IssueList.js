
import Issue from './Issues'
import React,{ useContext} from 'react'
import { UserContext } from '../context/UserProvider'


export default function IssueList(props){
    const { issues } = useContext(UserContext)
    console.log(issues)
    return (
        <div className='issue-list'>
            <h1>Issues</h1>
            {issues.map(issue => <Issue {...issue} key={issue._id} />) }
        </div>
    )
}