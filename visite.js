var largeurImage;
var hauteurImage;

function zoom(image) {
    if (zoomé == 1){
        image.style.width = largeurImage;
        image.style.height = hauteurImage;
        zoomé = 0;
    }
    else{
        largeurImage = image.style.width;
        hauteurImage = image.style.height;
        image.style.width = 672;
        image.style.height = 378;
        zoomé = 1;
    }
}