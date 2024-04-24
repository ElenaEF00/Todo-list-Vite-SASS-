import { useState } from "react";
import styles from "./index.module.scss";

const AddTodoInput = ({ setListData }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => setInputValue(event.target.value);

  const onHandleSubmit = (event) => {
    const newTodo = {
      id: Math.floor(Math.random() * 999) * new Date(),
      todo: inputValue,
      completed: false,
      userId: 31,
    };

    event.preventDefault();
    setListData((prev) => [...prev, newTodo]);
    setInputValue("");
  };

  return (
    <div className={styles.AddTodo}>
      <form className={styles.AddTodoInput} onSubmit={onHandleSubmit}>
        <input
          className={styles.AddTodoInput__input}
          type="text"
          value={inputValue}
          onChange={onInputChange}
          placeholder="Add your new task here"
        />
        <input className={styles.AddTodoInput__btn} type="submit" value="ADD" />
      </form>
    </div>
  );
};

export default AddTodoInput;
