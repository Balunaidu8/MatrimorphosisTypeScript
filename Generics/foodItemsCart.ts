import { Cart } from "./Cart";
type FoodItem = {
  name: string;
  price: number;
  quantity: number;
};

const foodCart = new Cart<FoodItem>();
foodCart.addItem({ name: "Burger", price: 120, quantity: 2 });
foodCart.addItem({ name: "Pizza", price: 250, quantity: 1 });
foodCart.removeItem(3);
console.log(foodCart.getItems());
console.log("Total food items:", foodCart.getCount());
