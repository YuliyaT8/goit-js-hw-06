const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],

  // Звернення до this в методах
  getBalance() {
    return this.balance; // Додано this. перед balance
  },
  getDiscount() {
    return this.discount; // Додано this. перед discount
  },
  setDiscount(value) {
    this.discount = value; // Додано this. перед discount
  },
  getOrders() {
    return this.orders; // Додано this. перед orders
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount; // Додано this. перед discount
    this.orders.push(order); // Додано this. перед orders
  },
};
