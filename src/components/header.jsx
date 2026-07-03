import { useState } from "react";



function Header(){

    const [number, setNumber] = useState(0);

    const changeNumber = () => {
        setNumber(number+1)
    }
    const resetNumber = () => {
        setNumber(0)
    }

 return (
     <div>
          <h1>Number : {number} </h1>
          <button onClick={changeNumber} >Click Me</button>
          <button onClick={resetNumber} >Click Me</button>
     </div>
 )
}
export default Header;