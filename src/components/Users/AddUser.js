import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  const enterUsernameHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const enterUserAgeHandler = (e) => {
    setEnteredUserAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredUserAge.trim().length === 0) {
        setError({
            title: "Invalid input",
            message: "Name and age field cannot be empty."
        });
        return;
    }
    if (+enteredUserAge < 0) {
        setError({
            title: "Invalid age",
            message: "Age cannot be smaller than 0."
        });
        return;
    }
    props.onAddUser(enteredUsername, enteredUserAge);

    setEnteredUsername("");
    setEnteredUserAge("");
  };

  const errorHandler = () => {
      setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onErrorHandler={errorHandler} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User name:</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={enterUsernameHandler}
          />
          <label htmlFor="userage">User age:</label>
          <input
            id="userage"
            type="number"
            value={enteredUserAge}
            onChange={enterUserAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
