const taskInput = document.getElementById('task');
const deadlineInput = document.getElementById('deadline');
const prioritySelect = document.getElementById('priority');
const taskList = document.querySelector('.task-list');
const taskheadings = document.querySelector('.task-headings');


function addTask() {
  
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    
    const taskLabel = document.createElement('div');
    taskLabel.classList.add('task-text');
    taskLabel.textContent = taskText;
    
    const taskDetails = document.createElement('div');
    taskDetails.classList.add('task-details');

    const taskDeadline = document.createElement('div');
    taskDeadline.classList.add('task-deadline');

    const deadline = deadlineInput.value;
    if (deadline) {
        const deadlineLabel = document.createElement('span');
        deadlineLabel.textContent = `${deadline}`;
        taskDeadline.appendChild(deadlineLabel);
    }

    const priority = prioritySelect.value;
    
    if (priority !== 'none') {
        const priorityLabel = document.createElement('span');
        if(priority === 'high'){
            priorityLabel.textContent = "Very Important";
        }
        else if(priority === 'medium'){
            priorityLabel.textContent = `Important`;
        }
        else{
            priorityLabel.textContent = "Less Important";
        }
        taskDetails.appendChild(priorityLabel);
        priorityLabel.classList.add(`${priority}-bgcolor`);
        taskItem.classList.add(`${priority}-priority`);
        taskheadings.style.visibility = 'visible'; 
        
    }

    
    const taskActions = document.createElement('div');
    taskActions.classList.add('actions');
    
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.addEventListener('click', () => {
        taskItem.remove();
    });

    taskItem.appendChild(taskDeadline);
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(taskDetails);
    taskItem.appendChild(taskActions);
    taskActions.appendChild(deleteButton);
    
    taskList.appendChild(taskItem);
    taskInput.value = '';
    deadlineInput.value = '';
    prioritySelect.value = 'none';
}

