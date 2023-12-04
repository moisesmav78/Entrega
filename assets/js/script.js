document.addEventListener("DOMContentLoaded", function() {
    const colorBoxes = document.querySelectorAll('.color-box');

    colorBoxes.forEach(function(box) {
        box.addEventListener("click", function(event) {
            event.target.style.backgroundColor = 'black';
        });
    });
});

