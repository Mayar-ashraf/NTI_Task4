var form = document.getElementById('form');
var tname = document.querySelector('#name');
var type = document.querySelector('#type');
var div = document.querySelector('#content');
var tasks = []
var date;
console.log("entered here");

form.addEventListener("submit", function(event) {

    event.preventDefault(); // To avoid page reloading

    date = new Date();
    console.log(date);
    
    if (tname.value == ""){
        alert("Task Name Field is empty! Please enter an approprite task name");
    }else{

        let task = {
            taskName : tname.value,
            taskType : type.value, 
            dateAdded : date       
        };
        tasks.push(task);
        console.log(task);
        console.log(tasks);

        switch(task['taskType']){
            case "In Progress":
                color = "orange";
                break;
            case "Done":
                color = "green";
                break;
            default:
                color = "red";
        }
        var div = document.getElementById('content');

        let element = document.createElement('h4');
        element.style.color = color;
        element.innerText = `${task['taskName']}, ${task['taskType']}, ${task['dateAdded']}`;
       
        let deleteBtn = document.createElement('input');
        deleteBtn.type = "submit";
        deleteBtn.value = "Delete";

        div.appendChild(element);
        div.appendChild(deleteBtn);

        // EDIT TASK 
        element.addEventListener("click", function() {

            console.log("Element Clicked");
            
            let editName = confirm(`Do you want to edit task name "${task['taskName']}"?`);
            if (editName){
                var newName = prompt("Enter New Task Name:");
                task['taskName'] = newName;
            }

            let editType = confirm(`Do you want to edit task type "${task['taskType']}"?`);
            if (editType){
                var newType = prompt("Enter New Task Type: (In Progress, Done, Task)");
                task['taskType'] = newType;
                switch(task['taskType']){
                    case "In Progress":
                        color = "orange";
                        break;
                    case "Done":
                        color = "green";
                        break;
                    default:
                        color = "red";
                }
            }
            
            element.innerText = `${task['taskName']}, ${task['taskType']}, ${task['dateAdded']}`
            element.style.color = color;
            console.log(color);
            console.log(task);
            console.log(tasks);
        });

        // DELETE TASK
        deleteBtn.addEventListener("click", function() {
            console.log(`delete for ${task.taskName}`);
            
            element.remove();
            deleteBtn.remove();
            tasks.splice(tasks.indexOf(task), 1);
            console.log(tasks);
            
        });
    }
    if(tasks.length > 0){
        let print = ''; 
        tasks.forEach(function(task){

                print += `Task Name: ${task['taskName']}
                        Task Type: ${task['taskType']}
                        Date Added: ${task['dateAdded']} \n
                `
        });
        console.log(print);
        alert(print);
    }
});

