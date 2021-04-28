let button = document.querySelector("#superDuperButton");
let ul = document.querySelector("#myList");
button.addEventListener("click", function() {
	//your code here
	let elementLI = document.createElement("LI");
	elementLI.innerHTML = "Forth element";
	ul.appendChild(elementLI);
});
