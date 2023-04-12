/*Here id with push is selected which contains the add button */
document.querySelector('#push').onclick = function(){
    /*Function validates the input , if the value entered its length is equal
    to zero then it alerts by saying to enter a task.
    The nodeValue property sets or returns the value of a node. */
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }
    /*adding a new task operation */
    /*When value is given for input button of new task it evaluates that 
    input is given and on click operations it updates the task section by using 
    the innerHtml property 
    By this the content appears in the tab of task section.
     the delete icon is also added if we want to delete after task is completed */
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
             <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
/*the variable name is current tasks , here before any input is given there is no
delete and input button displayed in the task section.
once the input is given it appears on the task section.
if button with class delete is selected then it performs the operation of 
remove task with the help of function */
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
/*	Toggles between tokens in the list
classlist.
task section has input and delete button 
the function first checks whether the input typed is already there in the 
task list if yes then it marks as completed 
from style css we strike off the input with class completed. */
        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
/*Clearing the input field after each entry by making the value to null. */
        document.querySelector("#newtask input").value = "";
    }
}
