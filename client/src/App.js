import {useEffect, useState} from 'react'
import Users from './components/Users';
import CreateUsers from './components/CreateUsers';

function App() {

  const [allUsers, setAllUsers] = useState([])
  const [wasClicked, setWasClicked] = useState(true)

  useEffect(() =>{
    fetch('http://localhost:4000/users')
    .then((resp) => resp.json())
    .then(usersList => setAllUsers(usersList))
  },[setAllUsers])

  // Handling Button Click for turnary expression
  function handleClick(){
    setWasClicked((current) => !current)
  }
  
  const perUserInfo = allUsers.map((u) => <Users key={u.id} id={u.id} email={u.email} firstName={u.firstName} lastName={u.lastName} username={u.username} setAllUsers={setAllUsers}/>)
  return (
    <div className="App">
      <h1>Hello World</h1>
      <button className="createUserButton" onClick={handleClick}>{wasClicked ? 'Create New User' : 'Close'}</button>{wasClicked ?'' :  <CreateUsers allUsers={allUsers} setAllUsers={setAllUsers} />}
      {perUserInfo}
    </div>
  );
}

export default App;
