// Your code here
let inputAdd = document.getElementById("AddToDo");
let list = document.getElementById("list");
let deleteButton = document.getElementById("papelera");

function addTask() {
	let elementLI = document.createElement("LI");
	elementLI.innerHTML = '<span><i class="fa fa-trash"></i></span> Run';
	list.appendChild(elementLI);
}
addTask();

deleteButton.addEventListener("click", function(event) {
	alert(event.target.id);
});
