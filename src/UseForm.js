import {useEffect, useState } from "react"

const UseForm = (callback,validate) =>{
    const [values,setValues] = useState({
        username:'',
        email:'',
        password:'',
        password2:''

    })
    const [errors,setErrors] = useState({})
    const [isSubmitting,setSubmitting] = useState(false)

    const handleChange = e => {
        const {name,value} = e.target
        setValues({
            ...values,
            [name] : value
        })
    }
    const handleSubmit = e =>{
        e.preventDefault();
        setErrors(validate(values));
        setSubmitting(true)
    }

    useEffect(()=>{
        if(Object.keys(errors).length ===0 && isSubmitting){
            callback()
        }
    },[errors])

    return {handleChange,values,handleSubmit,errors}
}
export default UseForm;