const menu = [
  { name: "Burger", price: 120 },
  { name: "Pizza", price: 150 },
  { name: "Fries", price: 90 }
];

let total = 0;

const menuContainer = document.getElementById("menu");
const totalElement = document.getElementById("cart-total");

menu.forEach(item => {
  const div = document.createElement("div");
  div.className = "menu-item";

  const itemText = document.createElement("p");
  itemText.innerText = `${item.name} - ₹${item.price}`;
  div.appendChild(itemText);

  const button = document.createElement("button");
  button.innerText = "Add to Cart";
  button.onclick = () => addToCart(item.name, item.price);
  div.appendChild(button);

  menuContainer.appendChild(div);
});

function addToCart(itemName, price) {
  total += price;
  totalElement.textContent = `Total: ₹${total}`;
}

