import { useState } from "react";
import InputSection from "./InputSection";
import TodoList from "./TodoList";
import DoneList from "./DoneList";

const TodoBefore = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const [dones, setDones] = useState<string[]>([]);

  const handleAdd = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  const handleComplete = (index: number) => {
    const completed = todos[index];
    setTodos(todos.filter((_, i) => i !== index));
    setDones([...dones, completed]);
  };

  const handleDelete = (index: number) => {
    setDones(dones.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>UMC Study Plan</h1>
      <InputSection input={input} setInput={setInput} onAdd={handleAdd} />
      <div className="lists">
        <TodoList todos={todos} onComplete={handleComplete} />
        <DoneList dones={dones} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default TodoBefore;
