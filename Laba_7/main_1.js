function changeMenuItem(ind){
	var nowDisplay = document.getElementById(ind).style.display;
	if (nowDisplay == "block"){
		document.getElementById(ind).style.display = "none";
	} else {
		document.getElementById(ind).style.display = "block";
	}
}
function changeBackgroundColor(color){
	document.body.style.backgroundColor=color;
}

window.onload = function () {
	var menuItems = document.getElementsByClassName("sub_menu");
	for (i=0; i < menuItems.length; i++){
		menuItems[i].style.display = "none";
	}
};