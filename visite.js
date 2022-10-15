var largeurImage;
var hauteurImage;
var zoome =0;
function zoom(image){    
    if(zoome == 0){
    largeurImage = image.style.width;
    hauteurImage = image.style.height;
    image.style.width = "672px";
    image.style.height = "378px";
    zoome = 1;
    }
    else{
    image.style.width = largeurImage;
    image.style.height = hauteurImage;
    zoome =0;
    }
}