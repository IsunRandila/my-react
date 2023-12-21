import React from 'react'
import './topicbox.css'

export default function TopicBox(props) {
  
  return (
    <div>
      <div className="topicBox">
        <span className='text'> my favutite food is {props.food} price is {props.price}</span>
        {props.children}
      </div>
    </div>
  )
}
