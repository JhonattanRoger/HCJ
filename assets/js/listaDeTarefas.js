// Selecionando o input e o button
const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");

const tasksContainer = document.querySelector(".tasks-container");

// Arrow function não preciso do return
// Retorna True caso o campo não esteja vazio
const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
  const inputIsValid = validateInput();

  if (!inputIsValid) {
    return inputElement.classList.add("error");
  }

  //Adição da tarefa

  const taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("task-item");

  const taskContent = document.createElement("p");
  taskContent.innerText = inputElement.value;
  //Marcar como concluído
  taskContent.addEventListener("click", () => handleClick(taskContent));

  const deleteItem = document.createElement("i");
  deleteItem.classList.add("fa-solid");
  deleteItem.classList.add("fa-trash");
  //Excluir tarefa
  deleteItem.addEventListener("click", () => handleDeleteClick());

  taskItemContainer.appendChild(taskContent);
  taskItemContainer.appendChild(deleteItem);
  tasksContainer.appendChild(taskItemContainer);

  //Limpar o input
  inputElement.value = "";
};

const handleClick = (taskContent) => {
    const tasks = tasksContainer.childNodes;

    for (const task of tasks) {
        // firstChild pega o primeiro filho que nesse caso é o parágrafo
        if (task.firstChild.isSameNode(taskContent)) {
            //Se já possuir a classe ele irá remover e caso contrário irá incluir
            task.firstChild.classList.toggle("completed");
        }        
    }
};

const handleInputChange = () => {
  const inputIsValid = validateInput();

  if (inputIsValid) {
    return inputElement.classList.remove("error");
  }
};

addTaskButton.addEventListener("click", () => handleAddTask());
inputElement.addEventListener("change", () => handleInputChange());
