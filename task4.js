var submitButton = document.getElementById('submit');
var tname = document.querySelector('#name');
var type = document.querySelector('#type');
var div = document.querySelector('#content');
var tasks = []
var date;

function deleteEelement(tasks, task){
    let deleteButton = document.getElementById(`delete${tasks.indexOf(task)}`);
    let elementToDelete = document.getElementById(`element${tasks.indexOf(task)}`);
    elementToDelete.remove();
    deleteButton.remove();

    tasks.splice(tasks.indexOf(task),1);
}
submitButton.onclick = function(e) {

    e.preventDefault(); // To avoid page reloading

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
    
        content.innerHTML += `<h4 id="element${tasks.indexOf(task)}" style="color:${color}">${task['taskName']}, ${task['taskType']}, ${task['dateAdded']}</h4> <input type="submit" value="Delete" id="delete${tasks.indexOf(task)}"> `;
        // EDIT TASK
        elementToEdit = document.getElementById(`element${tasks.indexOf(task)}`);
        elementToEdit.addEventListener("click", function() {

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
            
            elementToEdit.innerText = `${task['taskName']}, ${task['taskType']}, ${task['dateAdded']}`
            elementToEdit.style.color = color;
            console.log(color);
            
            console.log(task);
            
            console.log(tasks);
        });

        // DELETE TASK
        let deleteButton = document.getElementById(`delete${tasks.indexOf(task)}`);
        deleteButton.onclick = function(e) {

            e.preventDefault();
            deleteEelement(tasks, task);
            console.log(tasks);
            
        }
    }
    
        var print; 
        tasks.forEach(function(task){

            print += `Task Name: ${task['taskName']}
                    Task Type: ${task['taskType']}
                    Date Added: ${task['dateAdded']} \n
            `
        });
        console.log(print);
        alert(print);

}
