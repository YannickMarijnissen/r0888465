function toggleResponsiveClass() {
    var element = document.getElementById("navigation-head");
    if (element.className === "navigation") {
        element.className += " responsive";
    } else {
        element.className = "navigation";
    }
}
