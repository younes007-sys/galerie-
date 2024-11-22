
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");


var images = document.getElementsByClassName("gallery-item");
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "flex";
        modalImg.src = this.src; 
        captionText.innerHTML = this.alt;  
    };
}


function closeModal() {
    modal.style.display = "none";
}
