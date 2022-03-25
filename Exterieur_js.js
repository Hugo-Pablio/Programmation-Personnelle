var largeurImage;
var hauteurImage;

var zoomé;

function zoom(image) {
if (zoomé == 1){
    image.style.width = largeurImage;
    image.style.height = hauteurImage;
    zoomé = 0;
}
else{
    largeurImage = image.style.width;
    hauteurImage = image.style.height;
    image.style.width = "auto";
    image.style.height = "auto";
    zoomé = 1;
}

}