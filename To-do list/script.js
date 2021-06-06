var addbutton = document.getElementById("add-button");
addbutton.addEventListener("click", addToDoItem);

function addToDoItem() {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}


var clearcompleted = document.getElementById("clear-completed-button");
clearcompleted.addEventListener("click", clearCompletedToDoItems);

function clearCompletedToDoItems() {
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

var emptybutton = document.getElementById("empty-button");
emptybutton.addEventListener("click", emptyButtonToDoItems);

function emptyButtonToDoItems() {
    function emptylist() {
        var toDoItem = toDoList.children;
        while (toDoItem.length > 0) {
            toDoItem.item(0).remove();
        }
    }
}

var myArray = [];
myArray.push("something to store");
myArray.push("something else to store");
alert(myArray[0]);

var toDoInfo = {
    "task": "Thing I need to do",
    "completed": false
};

var savebutton = document.getElementById("save-button");
savebutton.addEventListener("click", saveButtonToDoItems);

function saveButtonToDoItems() {
    function saveList() {
        var toDos = [];

        for (var i = 0; i < toDoList.children.length; i++) {
            var toDo = toDoList.children.items(i);

            var toDoInfo = {
                "task": toDo.innerText,
                "completed": toDo.classList.contains("completed")
            };
            toDos.push(toDoInfo);
        }
        localStorage.setItem("toDos", JSON.stringify(toDos));
    }
}

function loadList() {
    if (localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) {
            var toDos = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}
loadList();

var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement('li');
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if (completed) {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    }
    else {
        this.classList.add("completed");
    }
}

