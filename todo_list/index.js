//Don't want anything in Pending or Completed Lists yet
//getting my elements fom html
let taskTextBox = document.getElementById("taskTextBox")
let addTaskButton = document.getElementById("addTaskButton")
let pendingTasksUl = document.getElementById("pendingTasksUl")
let completedTaskUl = document.getElementById("completedTaskUl")

// 1. When add button 'clicked', add value to li in pending UL --> add event listener to button
addTaskButton.addEventListener("click", function(){
  //create an li element
  let li = document.createElement("li");

  // 2. Also want a check box
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("checkBox")

  li.appendChild(checkBox);

  //3. Assigning value in text box to li
  let taskLabel = document.createElement("label");
  taskLabel.innerHTML = taskTextBox.value;
  taskLabel.classList.add("taskLabel")

  li.appendChild(taskLabel);

  // 2. Also want a check box
  //when checked will move to completed
  //when unchecked will move back to pending

  let removeButton = document.createElement("button");
  removeButton.innerHTML = "remove";
  removeButton.classList.add("removeButton")
  li.appendChild(removeButton);
  
  pendingTasksUl.appendChild(li);

  //adding event listener to remove Button
  removeButton.addEventListener("click", function(){
        let parent = this.parentElement.parentElement
        parent.removeChild(this.parentElement)
  })

  checkBox.addEventListener("click", function(){
          if(this.checked){
                  completedTaskUl.appendChild(this.parentElement)
          } else {
                  pendingTasksUl.appendChild(this.parentElement)
          }
          
        //append li to completed list
        //   completedTaskUl.appendChild(this.parentElement)
  })
})






// 3. Also want a remove button that will delete item

