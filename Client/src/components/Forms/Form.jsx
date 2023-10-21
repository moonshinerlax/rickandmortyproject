// eslint-disable-next-line no-unused-vars
import React from 'react'
import style from './Form.module.css'
import { useState } from 'react'
import validateData from '../Validattion/Validation'

export const Form = (props) => {
    const {login, register} = props;
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })
    const [signUp, setSignUp] = useState(false)

     const handleSubmit = (e) => {
        e.preventDefault()
        login(userData)
     }

     const handleSignUp = (e) => {
        e.preventDefault()
        register(userData)
    }

    const handleOnChange = (event) => {
        const Property = event.target.name
        const value = event.target.value
        setUserData({...userData, [Property]:value})
        validateData({...userData, [Property]:value}, errors, setErrors)
    }
    

  return (
    <div className={style.logInContainer}>
        {
            signUp ? (<form onSubmit={handleSignUp}>
                <h1 className={style.label}>welcome new comer</h1>
            <div className={style.inputContainer}>
                <label className={style.label} htmlFor='email'>register an email </label>
                <input className={style.input} type='text' value={userData.email} name='email' onChange={handleOnChange}></input>
                <span className={style.errorEmail}>{errors.email}</span>
            </div>
            <div className={style.inputContainer}>
                <label className={style.label} htmlFor='password'>create a password: </label>
                <input className={style.input} type='password' value={userData.password} name='password' onChange={handleOnChange}></input>
                <span className={style.errorPass}>{errors.password}</span>
            </div>
            <div className={style.buttonContainer}>
            <button className={style.button} type="submit" >Register</button>
            <button className={style.button} type="button" onClick={()=>{setSignUp(false)}}>Login</button>
            </div>
        </form>) 
        
        : 
        
        (<form onSubmit={handleSubmit}>
            <div className={style.inputContainer}>
                <h1 className={style.label}>welcome citizen of the universe</h1>
                <label className={style.label} htmlFor='email'>user: </label>
                <input className={style.input} type='text' value={userData.email} name='email' onChange={handleOnChange}></input>
                <span className={style.errorEmail}>{errors.email}</span>
            </div>
            <div className={style.inputContainer}>
                <label className={style.label} htmlFor='password'>password: </label>
                <input className={style.input} type='password' value={userData.password} name='password' onChange={handleOnChange}></input>
                <span className={style.errorPass}>{errors.password}</span>
            </div>
            <div className={style.buttonContainerSubmit}>
            <button className={style.button} type="submit" >Enter</button>
            <button className={style.button} type="button" onClick={()=>{setSignUp(true)}}>Sign Up</button>
            </div>
        </form>)
        }
        
        
    </div>
    
  )
}

export default Form
