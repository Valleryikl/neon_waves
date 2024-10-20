// menu
function myFunction() {
    let x = document.getElementById("myMenu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}
// slaider
let width = 0;
const sliderLine = document.querySelector(".when_slaider_line");

document.querySelector("#next").addEventListener('click', function() {
    width += 500;
    if (width > 3000) {
        width = 0;
    }
    sliderLine.style.left = -width + "px";
})
document.querySelector("#prev").addEventListener('click', function() {
    width -= 500;
    if (width < 0) {
        width = 3000;
    }
    sliderLine.style.left = -width + "px";
})