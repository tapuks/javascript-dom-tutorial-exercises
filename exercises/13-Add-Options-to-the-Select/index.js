window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	let mySelect = document.querySelector("#mySelect");
	for (var i = 0; i < countries.length; i++) {
		var myOption = document.createElement("option");
		myOption.innerHTML = countries[i];
		mySelect.appendChild(myOption);
	}
	this.console.log(mySelect);
	mySelect.addEventListener("change", e => {
		alert(e.target.value);
	});
};
