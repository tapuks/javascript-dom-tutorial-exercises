// Your code here
// let inputAdd = document.getElementById("AddToDo");
// let listUL = document.getElementById("list");
// let deleteButton = document.getElementsByClassName;
let liFather = document.querySelector("#container > ul");

//Borrar elementos
liFather.addEventListener("click", e => {
	if (e.target.className == "fa fa-trash") {
		liFather.removeChild(e.target.parentElement);
	}
});

// function addTask() {
// 	let elementLI = document.createElement("LI");
// 	elementLI.innerHTML = '<span><i class="fa fa-trash"></i></span> Run';
// 	list.appendChild(elementLI);
// }
// addTask();

// deleteButton.addEventListener("click", function(event) {
// 	alert(event.target.id);
// });
