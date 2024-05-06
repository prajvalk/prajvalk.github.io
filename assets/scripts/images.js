function toggleImageOrientation() {
    var prm = $("#images-vw-target").map(function() {
        this.classList.toggle("horview");
        return 0;
    }).get();
}

var currentImage = 1;

function nextImage(max_index) {
    if(currentImage + 1 > max_index) return;
    $("#img"+currentImage).css("display", "none");
    $("#c"+currentImage).css("display", "none");
    currentImage = currentImage + 1;
    $("#img"+currentImage).css("display", "block");
    $("#c"+currentImage).css("display", "block");
    var newText = currentImage + " of " + max_index;
    $("#img-text").html(newText);
}

function previousImage(max_index) {
    if(currentImage == 1) return;
    $("#img"+currentImage).css("display", "none");
    $("#c"+currentImage).css("display", "none");
    currentImage = currentImage - 1;
    $("#img"+currentImage).css("display", "block");
    $("#c"+currentImage).css("display", "block");
    var newText = currentImage + " of " + max_index;
    $("#img-text").html(newText);
}

$(document).ready(function(){
    $("#img"+currentImage).css("display", "block");
    $("#c"+currentImage).css("display", "block");
 });