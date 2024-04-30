import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
<Counter></Counter>
<ApiTry></ApiTry>
    </div>
  );
}
function Counter(){
  const st={
    width:'fit',
    border:'2px solid green',
    padding:'20px',
    margin:'0 auto'
  }
  const [count,setCount]=useState(0);
return (
  <div style={st}>
  <h1>count: {count} </h1>
  <button style={{padding:'15px', borderRadius:'20px'}} onClick={()=>setCount(count+1)}>Increase</button>
  <SecondCount count={count}></SecondCount>
  </div>
)
}
function ApiTry(){
  const [user,setUsers]=useState([]);
  const  api_url = 'https://jsonplaceholder.typicode.com/users'
  const count=0;
  useEffect(()=>{

    fetch(api_url)
    .then(response => response.json())
    .then(json => setUsers(json))
  },[])


  const newUser=user.slice(0,5);
  return (
    <div>
      <ul>
      <li>{user.length}</li>
        {

newUser.map(user=><li> {user.name}</li>)

        }

      </ul>
    </div>
  )
}
function SecondCount(props){


  return (
    <div>
      <h2>Again_Count: {props.count*10}</h2>
    </div>
  )
}

export default App;
