// eslint-disable-next-line no-unused-vars
import React from 'react'
import style from './Form.module.css'
import { useState } from 'react'
import validateData from '../Validattion/Validation'

export const Form = (props) => {
    const {login} = props;
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

     const handleSubmit = (e) => {
        e.preventDefault()
        login(userData)
     }

    const handleOnChange = (event) => {
        const Property = event.target.name
        const value = event.target.value
        setUserData({...userData, [Property]:value})
        validateData({...userData, [Property]:value}, errors, setErrors)
    }
    

  return (
    <div className={style.logInContainer}>
        <form onSubmit={handleSubmit}>
            <div className={style.inputContainer}>
                <label className={style.label} htmlFor='email'>user: </label>
                <input className={style.input} type='text' value={userData.email} name='email' onChange={handleOnChange}></input>
                <span className={style.errorEmail}>{errors.email}</span>
            </div>
            <div className={style.inputContainer}>
                <label className={style.label} htmlFor='password'>password: </label>
                <input className={style.input} type='password' value={userData.password} name='password' onChange={handleOnChange}></input>
                <span className={style.errorPass}>{errors.password}</span>
            </div>
            <button className={style.button} >Submit</button>
        </form>
    </div>
    
  )
}

export default Form
