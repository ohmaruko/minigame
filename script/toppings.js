// Array of topping options
const toppings = [
    { name: "Berries", imageURL: "./images/berries.svg" },
    { name: "Chocolates", imageURL: "./images/chocolates.svg" },
    { name: "Candles", imageURL: "./images/candles.svg" },
  ];

  // Function to generate HTML for topping options
  function generateToppingOptions() {
    const toppingContainer = document.querySelector(".toppingOptions");
  
    toppings.forEach(topping => {
      const img = document.createElement("img");
      img.src = topping.imageURL;
      img.alt = topping.name;
      img.addEventListener("click", () => {
        addToppingToCake(topping);
      });
      toppingContainer.appendChild(img);
    });
  }
  
  // Function to add topping to the cake display
  function addToppingToCake(topping) {
    const cakeDisplay = document.querySelector(".cake");
    const img = document.createElement("img");
    img.src = topping.imageURL;
    img.alt = topping.name;
    cakeDisplay.appendChild(img);
  }
  
  // Call the function to generate topping options when the page loads
  window.addEventListener("load", generateToppingOptions);
  