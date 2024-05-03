// Background
document.getElementById("background").style.backgroundColor = "#F5D2CC";
document.getElementById("bgbtn").addEventListener("click", changeBgColor);
function changeBgColor() {
    const colors = ["#F5D2CC", "#97D5CD", "#D5B197", "#D5CB97", "#97D599", "#979DD5", "#C197D5", "#D597CB", "#D597A6"]
    let selectedColor = colors[Math.floor(Math.random() * colors.length - 1)];
    document.getElementById("background").style.backgroundColor = selectedColor;
}

// back button 
document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.querySelector('.back');

    backButton.addEventListener('click', () => {
        // Navigate back to the previous page
        window.history.back();
    });
});
