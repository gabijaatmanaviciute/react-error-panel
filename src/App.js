import React, {useState} from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (username, userAge) => {
    setUsersList((prevUsersList) => [...prevUsersList, {id: Math.random().toString(), name: username, age: userAge}] )
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
