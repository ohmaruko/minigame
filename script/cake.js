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

// Display of the cake
function showElement(type, name) {

    const elementToShow = document.querySelector(`#${type}-${name}`);
    
    // Toggle the display state of the clicked element
    if (elementToShow.style.display === 'none') {
        elementToShow.style.display = 'block';
    } else {
        elementToShow.style.display = 'none';
    }
    
    // Show the clicked element and hide all others
    const elements = document.querySelectorAll(`.${type}Img`);
    elements.forEach(element => {
        if (element.id === `${type}-${name}`) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });

}


function toggleToppingDisplay(name) {
const topping = document.querySelector(`#topping-${name}`);
if (topping) {
    topping.style.display = topping.style.display === 'none' ? 'block' : 'none';
}
}

// Name input
function changeDisplayName() {
const newName = document.getElementById('inputName').value;
const displayName = document.getElementById('displayName');
displayName.textContent = newName;
}
