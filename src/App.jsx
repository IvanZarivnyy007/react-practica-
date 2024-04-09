import {useEffect, useState} from "react"
import Button from "./component/Button/Button";

const App = () => {
  const [clickCounter , setClickCounter] = useState(0)
  const [totalclickCounter , setTotalClickCounter] = useState(() => {
    const value =  localStorage.getItem('totalclickCounter')
    return +value
  })
  

  useEffect(() => {
    localStorage.setItem('totalclickCounter' , totalclickCounter)
  } ,[totalclickCounter])

  const totalCounter = () => {
    setTotalClickCounter ( totalclickCounter + 1)
  }

  const increment = () => {
    setClickCounter(clickCounter +1 )
    totalCounter()
    
  }
  const decrement = () => {
    setClickCounter(clickCounter -1 )
    totalCounter()
    
  }


  return (
    <div>
      
      <Button handleClick = {increment}>Button1</Button >
      <h2>{clickCounter}</h2>
      <h2>{totalclickCounter}</h2>
      <Button handleClick = {decrement}>Button2</Button>
      
    </div>
  )
};

export default App;
