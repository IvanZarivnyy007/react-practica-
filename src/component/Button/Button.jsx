// import {useState} from "react"

 const Button = ({children , handleClick}) => {

  return (
    <div>
        <button onClick={handleClick}>{children}</button>
      
    </div>
  )
};

export default Button;


