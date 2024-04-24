import TodoItem from "../TodoItem/TodoItem";
import styles from "./index.module.scss";

const TodoList = ({ list, setListData }) => {
  const reverseList = [...list].reverse();

  return (
    <div className={styles.TodoList}>
      {reverseList.map((item) => (
        <TodoItem todoData={item} setListData={setListData} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
