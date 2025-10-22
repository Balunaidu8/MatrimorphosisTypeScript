"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart_1 = require("./Cart");
var bookCart = new Cart_1.Cart();
bookCart.addItem({ id: 1, title: "TypeScript Handbook", price: 499 });
bookCart.addItem({ id: 2, title: "Clean Code", price: 699 });
console.log(bookCart.getItems());
console.log("Total books in cart:", bookCart.getCount());
