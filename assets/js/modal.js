function openModal(id) {
   var modal = document.getElementById("picmodal" + id);
   modal.style.opacity = 1;
   modal.style.zIndex = 1000;
   showSSpic(modal, 0);

   document.getElementById("dark-bg").style.display = "block";

}

var currentSSIdx;

function showSSpic(elem, idx) {
    console.log("aosiuhd")
    var slide = document.getElementById(elem.id + "-" + idx)
    console.log(slide)
    slide.style.display = "block";
    currentSSIdx = idx;
}

// Get the modal
var modal = document.getElementById('picmodal0');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modals = document.getElementsByClassName("picmodal");
    for (var i = 0; i < modals.length; i++) {
        if (event.target.className !== "picmodal" && 
            event.target.className !== "button modalbutton" &&
            event.target.className !== "fa fa-arrow-right" &&
            event.target.className !== "fa fa-arrow-left" &&
            event.target.className !== "picmodal-img" &&
            modals[i].style.opacity === "1" ) {

            modals[i].style.opacity = 0;
            modals[i].style.zIndex = -1000;

            document.getElementById("dark-bg").style.display = "none";
        }
    }
}
