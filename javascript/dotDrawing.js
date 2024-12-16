// drawing dots all over the page at the mouse position
isPressed = false;

// Function to handle dot-drawing with screen size check
onmousemove = function (e) {
    if (window.innerWidth <= 768) return; // Disable dots on mobile devices

    // Logging purposes
    // console.log("mouse location:", e.clientX, e.clientY);

    // Core functionality for dot-drawing
    var pos = e;
    var dot = document.createElement('div');
    dot.className = "dot";
    dot.style.left = pos.x + "px";
    dot.style.top = pos.y + "px";

    if (isPressed) {
        document.body.appendChild(dot);
    }
};

// Handle mouse button press and release
onmousedown = function () {
    if (window.innerWidth > 768) isPressed = true; // Only enable on larger screens
};

onmouseup = function () {
    isPressed = false;
};
