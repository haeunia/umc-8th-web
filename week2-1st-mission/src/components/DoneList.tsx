interface DoneListProps {
    dones: string[];
    onDelete: (index: number) => void;
  }
  
  const DoneList = ({ dones, onDelete }: DoneListProps) => {
    return (
      <div className="list-container">
        <h2>해낸 일</h2>
        <ul>
          {dones.map((done, index) => (
            <li key={index}>
              {done}
              <button onClick={() => onDelete(index)}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default DoneList;
  