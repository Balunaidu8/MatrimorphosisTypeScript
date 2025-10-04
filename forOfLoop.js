var orders = [
    {
        customer_name: "BaluNaidu",
        no_of_orders: 20,
        total_amount: 4000,
        paying_type: "online",
    },
    {
        customer_name: "puppy",
        no_of_orders: 10,
        total_amount: 2000,
        paying_type: "card",
    },
    {
        customer_name: "viggu",
        no_of_orders: 2,
        total_amount: 400,
        paying_type: "cash",
    },
];
for (var _i = 0, orders_1 = orders; _i < orders_1.length; _i++) {
    var order = orders_1[_i];
    console.log("Name of the customer :", order.customer_name, " ", "No of products purchase :", order.no_of_orders);
}
