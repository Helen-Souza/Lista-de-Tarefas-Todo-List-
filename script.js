document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === "") return; // Não permite tarefa vazia

    const taskList = document.getElementById('task-list');
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        ${taskText} 
        <button class="delete">Excluir</button>
    `;

    listItem.querySelector('.delete').addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    taskList.appendChild(listItem);
    taskInput.value = ""; // Limpa o campo de entrada
});
