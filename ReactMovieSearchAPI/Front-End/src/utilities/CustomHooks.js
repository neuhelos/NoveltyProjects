import {useState} from 'react'
import {validation} from './validation'

export const useInput = (inputValue, validationType) => {
    
    const [value, setValue] = useState(inputValue)
    const [error, setError] = useState("")
        
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    let inputValidation = validation(value, validationType)
    const handleBlur = () => {
        setError("")
        if(inputValidation.error) {
            setError(inputValidation.error)
        }
    }

    const clearinput = () => {
        setValue("")
    }

    return {
        value,
        onChange: handleChange, 
        onBlur: handleBlur, 
        error, 
        formIsValid: inputValidation.formIsValid, 
        clearinput
    }
}