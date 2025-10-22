"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
var Cart = /** @class */ (function () {
    function Cart() {
        this.items = [];
    }
    Cart.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Cart.prototype.removeItem = function (index) {
        if (index >= 0 && index < this.items.length) {
            var removed = this.items.splice(index, 1)[0];
            console.log("".concat(JSON.stringify(removed), " is removed from the items"));
            return removed;
        }
        console.log("Noting is removed");
        return null;
    };
    Cart.prototype.getItems = function () {
        return this.items;
    };
    Cart.prototype.getCount = function () {
        return this.items.length;
    };
    return Cart;
}());
exports.Cart = Cart;
