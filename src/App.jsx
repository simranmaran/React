import { useState ,useEffect} from "react";
const App = () => {
  const[myval,setMyval]=useState(0)
  useEffect(()=>{
    setTimeout(()=>{
       setMyval(myval+1);
    }, 300)
  })
  return (
    <>
      <h1>welcome to my App:{myval}</h1>
    </>
  )
}

export default App
