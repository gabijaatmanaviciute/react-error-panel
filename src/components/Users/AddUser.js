import {useState} from 'react';
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

  const enterUsernameHandler = (e) => {
      setEnteredUsername(e.target.value)
  };
  const enterUserAgeHandler = (e) => {
      setEnteredUserAge(e.target.value)
  };

  const addUserHandler = (e) => {
    e.preventDefault();

    if (enteredUsername.trim() === 0 || enteredUserAge.trim() === 0) return;
    if (+enteredUserAge < 1) return;

    props.onAddUser(enteredUsername, enteredUserAge)

    setEnteredUsername('')
    setEnteredUserAge('')
  };
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User name:</label>
        <input id="username" type="text" value={enteredUsername} onChange={enterUsernameHandler} />
        <label htmlFor="userage">User age:</label>
        <input id="userage" type="number" value={enteredUserAge} onChange={enterUserAgeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
