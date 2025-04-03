"use strict";
const taskInput = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');
const doneList = document.getElementById('doneList');
taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && taskInput.value.trim() !== '') {
        addTask(taskInput.value.trim());
        taskInput.value = '';
    }
});
function addTask(taskText) {
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
function moveToDone(taskElement, taskText) {
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
