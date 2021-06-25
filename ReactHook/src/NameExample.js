import React, {useState,useEffect,useRef} from "react";

const NameExample = () =>{
  const [name,setName] = useState('')
  const rendercount = useRef(1)

  useEffect(()=>{
    rendercount.current=rendercount.current+1
  })

  return(
    <>
    <input value={name} onChange={e => setName(e.target.value)}/>
    <div>My Name is {name}</div>
    <div>I Rendered  {rendercount.current} times</div>
    </>
  )
}

export default NameExample;