interface TodoListProps {
    todos: string[];
    onComplete: (index: number) => void;
  }
  
  const TodoList = ({ todos, onComplete }: TodoListProps) => {
    return (
      <div className="list-container">
        <h2>해야 할 일</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => onComplete(index)}>완료</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TodoList;
  