import React, { useState } from 'react'

export default function NewComponent() {
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    function showInput(event) {
        
        setData({...data, [event.target.name]:event.target.value})
    }

    function handleOnClick() {
        if ( data.username === "ahs" && data.password === "1234" ) {
            console.log("login correct")
        } else {
            console.error("password or username incorrect")
        }
    }
  return (
      <div>
          <input name='username' value={data.username} onChange={showInput}/>
          <input name='password' value={ data.password } onChange={showInput}/>
          <button onClick={handleOnClick}>Login</button>
    </div>
  )
}
