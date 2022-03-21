import React from 'react'

const useForm = (initialState={}) => {
    const [values, setValues] = React.useState(initialState)
    const handleInputChange=({target})=>{
        setValues({
            ...values,
            [target.name]: target.value
        })
    }
    const reset=()=>{
        setValues(initialState)
    }
    return [values, handleInputChange, reset];
}

export default useForm