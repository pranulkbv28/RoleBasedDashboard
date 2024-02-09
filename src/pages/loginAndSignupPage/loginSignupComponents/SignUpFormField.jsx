// import React, { useState } from 'react'
import Button from '../../../components/Button'


const SignupFormField = (props) => {


  return (
    <div>  
      <form onSubmit={props.submitHandler}  className={props.formClassname}>
        <input
            className={props.inputNameClass} 
            type="text" 
            name="name" 
            id="name"
            placeholder='Enter your name'
            onChange={(e)=>props.setName(e.target.value)}
        />
        <input 
          className={props.inputEmailClass} 
          type="email" 
          name="email" 
          id="email" 
          placeholder={props.emailPlaceholderValue}
          onChange={(e)=>props.setEmail(e.target.value)} 
        />
        <input 
          className={props.inputPasswordClass} 
          type="password" 
          name="password" 
          id="password" 
          placeholder='Enter your password'
          onChange={(e)=>props.setPassword(e.target.value)}
        />
        <Button type="submit" className={props.formButtonClass}>{props.btnValue}</Button>
      </form>
    </div>
  )
}

export default SignupFormField