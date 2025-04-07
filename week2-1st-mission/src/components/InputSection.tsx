import React from "react";

interface InputSectionProps {
  input: string;
  setInput: (value: string) => void;
  onAdd: () => void;
}

const InputSection = ({ input, setInput, onAdd }: InputSectionProps) => {
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onAdd();
        }}
        placeholder="스터디 계획을 작성해보세요!"
      />
      <button onClick={onAdd}>할 일 추가</button>
    </>
  );
};

export default InputSection;
