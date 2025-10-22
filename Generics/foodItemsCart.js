"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart_1 = require("./Cart");
var foodCart = new Cart_1.Cart();
foodCart.addItem({ name: "Burger", price: 120, quantity: 2 });
foodCart.addItem({ name: "Pizza", price: 250, quantity: 1 });
foodCart.removeItem(3);
console.log(foodCart.getItems());
console.log("Total food items:", foodCart.getCount());
