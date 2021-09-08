import React, {useState} from 'react'

const initInputs = {
    title: "",
    description: "", 
    imgUrl: ""
}

export default function IssueForm(props){
    const [inputs, setInputs] = useState(initInputs)
    const {addIssue} = props

    function handleChange(e){
        const {name, value} = e.target
        setInputs(previnputs => ({
            ...previnputs,
            [name]: value
        }))
    }
    function handleSubmit(e){
        e.preventDefault()
        addIssue(inputs)
        setInputs(initInputs)
    }
}