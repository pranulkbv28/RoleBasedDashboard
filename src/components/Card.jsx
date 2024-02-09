import React from 'react'
import graph from '../assets/images/dummyGraphs.jpg'

const Card = (props) => {
  return (
    <div className={props.cardClassName}>
      <img className={props.imgClassName} src={graph} alt="dummy-graph" />
    </div>
  )
}

export default Card
