import React from 'react'

const Li = (props) => {
  return (
    <>
     <li className={props.className}>{props.children}</li>
    </>
  )
}

export default Li
