function openModal(id) {
   var modal = document.getElementById("picmodal" + id);
   modal.style.opacity = 1;
   modal.style.zIndex = 1000;
   showSSpic(modal, 0);

   document.getElementById("dark-bg").style.display = "block";

}

var currentSSIdx;

function showSSpic(elem, idx) {
    var slide = document.getElementById(elem.id + "-" + idx);
    slide.style.display = "block";
    currentSSIdx = idx;
}

function SSNext(id) {
    var currentSS = document.getElementById(id + "-" + currentSSIdx)
    currentSS.style.display = "none";
    var futureSS = document.getElementById(id + "-" + (currentSSIdx + 1));
    if (futureSS) {
        futureSS.style.display = "block";
        currentSSIdx++;
    } else {
        currentSSIdx = 0;
        document.getElementById(id + "-" + currentSSIdx).style.display = "block";
    }
}

function SSPrev(id) {
    var currentSS = document.getElementById(id + "-" + currentSSIdx)
    currentSS.style.display = "none";
    var futureSS = document.getElementById(id + "-" + (currentSSIdx - 1));
    if (futureSS) {
        futureSS.style.display = "block";
        currentSSIdx--;
    } else {
        var slides = document.getElementsByClassName(id + "-img");
        currentSSIdx = slides.length-1;
        futureSS = document.getElementById(id + "-" + (currentSSIdx));
        futureSS.style.display = "block";
    }
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
            event.target.className.indexOf("ss-image") === -1 &&
            modals[i].style.opacity === "1" ) {

            modals[i].style.opacity = 0;
            modals[i].style.zIndex = -1000;

            document.getElementById("dark-bg").style.display = "none";

            var images = document.getElementsByClassName("ss-image");
            for (var i = 0; i < images.length; i++) {
                images[i].style.display = "none";
            }
        }
    }
}
