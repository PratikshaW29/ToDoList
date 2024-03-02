const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

todoInput.addEventListener('keypress', function(event) {
  
  if (event.key === 'Enter') {
    addTodo();
  }
});

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    const li = document.createElement('li');
    li.textContent = todoText;
    li.className="liStyle";
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
      li.remove();
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    
    todoInput.value = '';
  }
}
