import { useState } from "react";

const Todo = () => {
  // ✅ 상태 선언
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const [dones, setDones] = useState<string[]>([]);

  // ✅ 할 일 추가 함수
  const handleAdd = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]);
    setInput("");
  };

  // ✅ 완료 처리 함수
  const handleComplete = (index: number) => {
    const completed = todos[index];
    setTodos(todos.filter((_, i) => i !== index));
    setDones([...dones, completed]);
  };

  // ✅ 삭제 함수
  const handleDelete = (index: number) => {
    setDones(dones.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>UMC Study Plan</h1>

      {/* ✅ 입력창 */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleAdd();
        }}
        placeholder="스터디 계획을 작성해보세요!"
        required
      />

      {/* ✅ 추가 버튼 */}
      <button type="submit" onClick={handleAdd}>
        할 일 추가
      </button>

      <div className="lists">
        {/* ✅ 해야 할 일 리스트 */}
        <div className="list-container">
          <h2>해야 할 일</h2>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button
                  className="complete-btn"
                  onClick={() => handleComplete(index)}
                >
                  완료
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ 해낸 일 리스트 */}
        <div className="list-container">
          <h2>해낸 일</h2>
          <ul>
            {dones.map((done, index) => (
              <li key={index}>
                {done}
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(index)}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
