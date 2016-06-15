var instagramImageClassName = '._icyx7';
    imagesSelector = document.querySelectorAll(instagramImageClassName);


// Iterate the images and call download function
Array.prototype.forEach.call(imagesSelector, function(el, i){
    downloadImages(el.getAttribute('src'));
});

//download function to download image from the url
function downloadImages(imageUrl) {
    var xhr = new XMLHttpRequest();
        a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
    xhr.open('GET', imageUrl, true);
    xhr.responseType = 'blob';

    xhr.onload = function(e) {
        var blob = new Blob([xhr.response], {type: 'image/png'}),
        url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = imageUrl.split("?")[0].split("/")[imageUrl.split("?")[0].split("/").length - 1];
        a.click();
        window.URL.revokeObjectURL(url);
    };

    xhr.send();
}
