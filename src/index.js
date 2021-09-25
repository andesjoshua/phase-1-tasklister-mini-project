document.addEventListener("DOMContentLoaded", () => {

  const newTaskForm = document.getElementById('create-task-form');
  const inputData = document.getElementById('new-task-description')
  const taskUl = document.getElementById('tasks')

    newTaskForm.addEventListener('submit', (e) => {
      e.preventDefault()
      renderApp()
    })

    const addTask = () => {
      taskUl.innerHTML = `<li>${inputData.value}</li>`
    }

    const renderApp = () => {
      if(taskUl.innerHTML) {
        addTask()
      } else {
          console.log('fail')
      }
      
    }    
});
