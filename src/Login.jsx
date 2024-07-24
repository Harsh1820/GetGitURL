import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  let params = useParams()
  console.log(params);
  const doLogin = () => {
    console.log("The Button is Clicked")
    alert("Done for the Day");
  }

  useEffect(()=>{
    // console.log("Hii I am inside the useEffects");
    axios.get("/todos")
    .then((response)=>{
      console.log(response.data);
      
    })
  },[]);

  return (
    <div className='Login'>
      <h1>{params.title}</h1>
      <h1>{params.tokenId}</h1>
      <input type='text' name='username' />
      <input type='password' name='password' />
      <button onClick={doLogin}>Login Now</button>
    </div>


  );
}

export default Login;
