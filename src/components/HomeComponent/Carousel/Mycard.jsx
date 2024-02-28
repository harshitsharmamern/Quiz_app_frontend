import React from 'react'
import './myCard.css'
const Mycard = (props) => {
  return (
    <div className='mycard'>Mycard no, {props.cardid}</div>
  )
}

export default Mycard