
class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  
  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

// class ShoppingBasket {
//   constructor() {
//     this.items = []
//   }
//   getTotalPrice() {
//     return this.items.reduce((rollingSum, candy) => rollingSum + candy.getPrice(), 0)
//   }
//   addItem(candy) {
//     this.items.push(candy)
//   }

// }

// module.exports = { Candy, ShoppingBasket }


class ShoppingBasket {
  constructor(candy) {
    this.discount = 0;
    this.candies = [candy]
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.candies.forEach((candy) => {
      totalPrice += candy.getPrice();
    });

    return totalPrice - this.discount;
  }
}

const test = new ShoppingBasket(new Candy('Mars', 4.99))

test.applyDiscount(4.98);
console.log(test.getTotalPrice());