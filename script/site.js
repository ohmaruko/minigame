// Custom Cursor
const cursorGraphic = document.querySelector('.cursor');

const moveImageWithCursor = (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const offsetX = 20;
  const offsetY = 20;

  const newImageX = mouseX + offsetX;
  const newImageY = mouseY + offsetY;

  cursorGraphic.style.left = `${newImageX}px`;
  cursorGraphic.style.top = `${newImageY}px`;
};

window.addEventListener('mousemove', moveImageWithCursor);

window.addEventListener('scroll', () => {
  moveImageWithCursor({
    clientX: event.clientX,
    clientY: event.clientY
  });
});


// Display of the cake
var cakeLayer = ["./images/cream_white.svg", "./images/cream_chocolate.svg"];
var cakeToppings = ["./images/berries.svg", "./images/chocolates.svg"];

// To track which image layer to show
var currentCakeLayerIndex = 0;
// To track which image layer to show
var currentCakeToppingIndex = 0;

function changeLayer() {
    var cakeLayerImage = document.getElementById("cakeLayer");
    cakeLayerImage.src = cakeLayer[currentCakeLayerIndex];
    currentCakeLayerIndex = (currentCakeLayerIndex + 1) % cakeLayer.length;
}

function changeTopping() {
    var cakeToppingImage = document.getElementById("cakeTopping");
    cakeToppingImage.src = cakeToppings[currentCakeToppingIndex];
    
    cakeToppingImage.width = 350; 
    cakeToppingImage.height = 200;

    currentCakeToppingIndex = (currentCakeToppingIndex + 1) % cakeToppings.length;
}

changeLayer();
changeTopping();

setInterval(changeLayer, 3000);
setInterval(changeTopping, 3000);