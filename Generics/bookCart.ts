import { Cart } from "./Cart";
type Book = {
  id: number;
  title: string;
  price: number;
};

const bookCart = new Cart<Book>();
bookCart.addItem({ id: 1, title: "TypeScript Handbook", price: 499 });
bookCart.addItem({ id: 2, title: "Clean Code", price: 699 });

console.log(bookCart.getItems());
console.log("Total books in cart:", bookCart.getCount());
