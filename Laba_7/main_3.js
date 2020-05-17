function showObject(target) {
	target.classList.add('show');
	target.classList.remove('hide');
}

function hideObject(target) {
	target.classList.add('hide');
	target.classList.remove('show');	
}

function changeImage(photo_number) {
	document.getElementById('foto').src = "res/img_" + photo_number + ".jpg";
}

window.onload = function (){
	var childMenuItems = document.getElementsByClassName("menu_item");
	for (i=0; i < childMenuItems.length; i++){
		childMenuItems[i].addEventListener("mouseenter", function(event){
			showObject(event.target.children[0]);
		});
		childMenuItems[i].addEventListener("mouseleave", function(event){
			console.log(event.target);
			hideObject(event.target.children[0]);
		});
	}
}
