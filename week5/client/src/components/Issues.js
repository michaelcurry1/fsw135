import React from 'react'

export default function Issue(props){
    return (
        <div className= 'issue'>
            <h1>{props.title}</h1>
            <h3>{props.description}</h3>
            <img src={ props.imgUrl } alt= 'Issue Pic' width={300}/>

        </div>
    )
}