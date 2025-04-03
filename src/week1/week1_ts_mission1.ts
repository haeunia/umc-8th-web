const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const todoList = document.getElementById('todoList') as HTMLUListElement;
const doneList = document.getElementById('doneList') as HTMLUListElement;

taskInput.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Enter' && taskInput.value.trim() !== '') {
    addTask(taskInput.value.trim());
    taskInput.value = '';
  }
});

function addTask(taskText: string): void {
  const li = document.createElement('li');
  li.textContent = taskText;

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '완료';
  completeBtn.className = 'complete-btn';

  completeBtn.addEventListener('click', () => {
    moveToDone(li, taskText);
  });

  li.appendChild(completeBtn);
  todoList.appendChild(li);
}

function moveToDone(taskElement: HTMLLIElement, taskText: string): void {
  todoList.removeChild(taskElement);

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '삭제';
  deleteBtn.className = 'delete-btn';

  deleteBtn.addEventListener('click', () => {
    doneList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  doneList.appendChild(li);
}
