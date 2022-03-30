const { beforeEach } = require('@jest/globals');
const classes = require('./shoppingBasket')

describe('candy', () => {
  const candy = new classes.Candy('Mars', 4.99);

  describe('getName', () => {
    it('returns the name', () => {
      expect(candy.getName()).toBe('Mars');
    });
  });

  describe('getPrice', () => {
    it('returns the price', () => {
      expect(candy.getPrice()).toBe(4.99);
    });
  });
});

describe('shoppingBasket', () => {
  let shoppingBasket;
  let candyDouble;

  beforeEach(() => {
    shoppingBasket = new classes.ShoppingBasket();
    candyDouble = { getPrice: () => 4.99};
  });

  it('#addItem - > adds the item to the shopping basket', () => {
    shoppingBasket.addItem(candyDouble);
    expect(shoppingBasket.getTotalPrice()).toBe(4.99);
  });

  it('#getTotalPrice - > it returns the total price of the basket', () => {
    shoppingBasket.addItem(candyDouble);
    shoppingBasket.addItem(candyDouble);
    expect(shoppingBasket.getTotalPrice()).toBe(9.98);
  });
});
