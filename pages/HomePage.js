import React from 'react'
import TopicBox from '../components/TopicBox'
import Content from '../components/Content'
import { Link } from 'react-router-dom'
import "./HomePage.css"
import { useState } from 'react'

export default function HomePage() {
  
  const [count, setCount] = useState(0)

  // let count = 0;
  const increment = () => {
    // count += 1;
    setCount(count + 1);
  }
  const decrement = () => {
    // count -= 1;
    setCount(count - 1)
  }

  return (
    // <div>
    //   <h1>Home page</h1>
    //   <Link to = "./About" > ABOUT US
    //   </Link> 

    //   <Link to = "./Contact" >  CONTACT US 
    //   </Link> 

    //   <h2> podi app ekak hadannayi yanne</h2>

    // </div>
    <>
    
    <span className='title'>My Counter</span>
    <p className='subtitle'>  The count is {count}</p>
    <button onClick={decrement} className='button'> - </button>
    <button onClick = {increment} className='button'> + </button>
    </>
  )
}
