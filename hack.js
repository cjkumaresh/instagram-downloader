var instagramImageClassName = '._icyx7',
	instagramVideoClassName = '._c8hkj';

//download function to download image/video from the url
var download = (url) => {
    var a = document.createElement("a");
	document.body.appendChild(a);
	a.style = "display: none";
	a.href = url // to convert into full resolution images
	a.download = url.split("?")[0].split("/")[url.split("?")[0].split("/").length - 1];
	a.click();
	window.URL.revokeObjectURL(url);

}

var downloadImages = () => {
	var imagesSelector = document.querySelectorAll(instagramImageClassName);
	// Iterate the images and call download function
	Array.prototype.forEach.call(imagesSelector, (el, i) => {
		var url = el.getAttribute('src');
		url = url.split('/').filter((val, index) => { 
			if(val.indexOf('c') === 0 || val === 'sh0.08' || val === 's640x640') 
				return false;
			else
				return true;
		}).join('/');
		download(url);
	});

}

var downloadVideo = () => {
	var videoSelector = document.querySelectorAll(instagramVideoClassName);
	// Iterate the images and call download function
	Array.prototype.forEach.call(videoSelector, (el, i) => {
		var url = el.getAttribute('src');
		download(url);
	});
	
}