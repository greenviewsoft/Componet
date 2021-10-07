import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      <MyComponet brand="Apple" price="5000"></MyComponet>
      <MyComponet brand="microsoft" price="3000"></MyComponet>
      <MyComponet brand="google" price="2000"></MyComponet>
    
  
    </div>
  );
}

function LoadUsers(){
  const [users, setUsers] = useState([]);

useEffect (()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data))

}, [])

  return (
<div>
  <h1>Load Users {users.length} </h1>
  {
    users.map(user => <User name={user.name} phone={user.phone} ></User>)
  }
</div>
  )
}




function User(props) {
  return(
    <div className="user" > 
      <h2>Name:{props.name}</h2>

      <p>call me {props.phone} </p>
    </div>
  )
}

function MyComponet(props){
  const [points, setpoints] = useState(1);
  const myStyle = {
    backgroundColor: 'lightblue',
     border: '3px solid red',
     margin:'10px',  
     padding:'5px',
     borderRadius:'10px'
  }

function myfunc(){
  console.log('abu minecraft diba pls ');
}
 
myfunc()

 const handleAddPoints = () => {
const newPoints = points * 150;
setpoints(newPoints);
 }
  return (
    <div style={myStyle}> 
<h1 className=""> party end {props.brand}!!!
</h1>
<h4>Ask Money {props.price} i have points:{points} </h4>
<button onClick={handleAddPoints} >Add points</button>
<p style={{color: 'magenta',fontWeight:'bold'}}>Hello prio food baz team aste aste chotpoti khao</p>
      </div>
  )
}

export default App;
