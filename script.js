document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');
    const clock = document.getElementById('clock');
  
    // Update live clock
    function updateClock() {
      const now = new Date();
      clock.textContent = now.toLocaleString();
    }
    setInterval(updateClock, 1000);
    updateClock();
  
    // Add task on button click
    addBtn.addEventListener('click', addTask);
  
    // Add task on Enter key
    taskInput.addEventListener('keypress', e => {
      if (e.key === 'Enter') addTask();
    });
  
    // Main function to add a task
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;
  
      const li = document.createElement('li');
  
      // Left part: task text, label, checkbox
      const left = document.createElement('div');
      left.classList.add('task-left');
  
      const span = document.createElement('span');
      span.textContent = taskText;
      span.classList.add('task-text');
  
      const markLabel = document.createElement('label');
      markLabel.textContent = 'Mark as done';
      markLabel.classList.add('label-text');
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', () => {
        span.classList.toggle('done', checkbox.checked);
      });
  
      left.appendChild(span);
      left.appendChild(markLabel);
      left.appendChild(checkbox);
  
      // Right part: delete label + icon
      const right = document.createElement('div');
      right.classList.add('task-right');
  
      const deleteLabel = document.createElement('label');
      deleteLabel.textContent = 'Delete';
      deleteLabel.classList.add('label-text');
  
      const deleteBtn = document.createElement('i');
      deleteBtn.className = 'fa-solid fa-trash';
      deleteBtn.addEventListener('click', () => {
        li.remove();
      });
  
      right.appendChild(deleteLabel);
      right.appendChild(deleteBtn);
  
      // Combine and append to task list
      li.appendChild(left);
      li.appendChild(right);
      taskList.appendChild(li);
  
      taskInput.value = '';
    }
  });
  