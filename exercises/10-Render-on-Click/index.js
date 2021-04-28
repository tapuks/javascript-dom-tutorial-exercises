let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let element = document.createDocumentFragment("DIV");
	element.style.background = "yellow";
	element.innerHTML = "Hello World";
	document.body.appendChild(element);
});
