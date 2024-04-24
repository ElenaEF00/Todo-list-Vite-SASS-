import { useState, useEffect } from "react";
import AddTodoInput from "./components/AddTodoInput";
import TodoList from "./components/TodoList";
import styles from "./App.module.scss";

function App() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setListData(data.todos));
  }, []);

  return (
    <>
      <h1>TO DO LIST</h1>
      <div className={styles.App}>
        <AddTodoInput setListData={setListData} />
        <TodoList list={listData} setListData={setListData} />
      </div>
    </>
  );
}

export default App;
