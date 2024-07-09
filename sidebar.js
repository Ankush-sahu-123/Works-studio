var isVisible = false;
function toggleVisibility() {
    // Get the element
    var element = document.getElementById("sidebar");
    var main = document.getElementById("main");


    // Toggle visibility
    if (isVisible) {
        element.style.display = "none";
        main.style.display = "block";
    } else {
        element.style.display = "block";
        main.style.display = "none";
    }

    // Update visibility flag
    isVisible = !isVisible;
}