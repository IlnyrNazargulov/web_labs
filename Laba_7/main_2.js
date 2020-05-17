function exitImage() {
	document.getElementById('imageBlock').style.display = "none";
}

window.onload = function handleImages(){
	var images = document.getElementsByClassName("img");
	for (i=0; i < images.length; i++){
		images[i].onmouseover= function(target){
			console.log(target.srcElement.src);
			document.getElementById('imageBlock').style.display = "block";
			document.getElementById('originalImage').src = target.srcElement.src
			document.getElementById('originalImage').width=500;
		};
	}
	document.getElementById('originalImage').style.display = "block";
	document.getElementById('originalImage').src = images[0].src
	document.getElementById('originalImage').width=500;
}
