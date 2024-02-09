import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.eventHandler} type={props.type} className={props.className}>{props.children}</button>
  )
}

export default Button
