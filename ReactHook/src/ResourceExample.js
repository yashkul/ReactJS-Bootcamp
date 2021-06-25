import React, { useEffect, useState } from "react";

const ResourceExample = ()=>{
  const [resourceType,setResourceType] = useState('post')
  const[items,setItems] = useState([]);

  console.log(resourceType);
//changes only when resource is changed.

  useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
  },[resourceType])

  return(
    <>
      <div>
        <button onClick={()=>setResourceType('posts')}>Posts</button>
        <button onClick={()=>setResourceType('users')}>Users</button>
        <button onClick={()=>setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      <pre>{JSON.stringify(items)}</pre>
    </>
  )
}

export default ResourceExample;

