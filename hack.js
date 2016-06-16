var instagramImageClassName = '._icyx7';
    imagesSelector = document.querySelectorAll(instagramImageClassName);


// Iterate the images and call download function
Array.prototype.forEach.call(imagesSelector, function(el, i){
    downloadImages(el.getAttribute('src'));
});

//download function to download image from the url
function downloadImages(url) {
    var a = document.createElement("a");
	document.body.appendChild(a);
	a.style = "display: none";

	a.href = url.replace('s640x640/sh0.08/', '').replace('c202.0.676.676/', ''); // to convert into full resolution images
	a.download = url.split("?")[0].split("/")[url.split("?")[0].split("/").length - 1];
	a.click();
	window.URL.revokeObjectURL(url);
}
