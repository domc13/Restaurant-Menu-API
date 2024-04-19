const { rootValue } = require('../resolver');
const { menu } = require('../menu');
const { execute } = require('graphql');

describe('getOneItem', () => {

  test("successfully retrieves correct item from menu", () => {
    const item = { category: "Green Salads", name: "Southwest Grilled Chicken" };
    const result = rootValue.getOneItem({ item });
    expect(result).toEqual(menu["Green Salads"][3]);
  });

  test("throws error if category not found", () => {
    const item = { category: "Greene Salads", name: "Southwest Grilled Chicken" };
    expect(() => rootValue.getOneItem({ item })).toThrow("Category 'Greene Salads' not found. Please check the category name.");
  });

  test("throws error if item not found", () => {
    const item = { category: "Green Salads", name: "Southwest Chicken" };
    expect(() => rootValue.getOneItem({ item })).toThrow("Menu item not found for Southwest Chicken in Green Salads");
  });
});

describe('getItemsByCategory', () => {

  test ("successfully retrieves all items from one category", () => {
    const category = "Appetizers";
    result = rootValue.getItemsByCategory({category});
    expect(result.length).toEqual(5)
  })

})

describe('getAllItems', () => {

  test("successfully retrieves all items from the menu", () => {
    result = rootValue.getAllItems();
    expect(result.length).toEqual(41);
  })
})

describe('calcTotalPrice', () => {

  test("sucessfull calculate total price for all item types", () => {
    items = [
      {
        category: "Appetizers",
        name: "Iceberg Wedge Salad with House Cured Bacon",
        quantity:1
      },
      {
        category: "Cold Sandwiches",
        name: "Rare Roast Beef & Swiss",
        size: "full",
        upgradeOption: "French onion soup",
        quantity:1
      },
      {
        category: "Soup",
        name: "Soup of the Day",
        saladOption: "fresh fruit",
        quantity:1
      },
      {
        category: "Enchiladas",
        name: "Pepita Crusted Salmon with Chipotle Glaze",
        amount: "tres",
        quantity: 1
      }
    ]
    result = rootValue.calcTotalPrice({ items });
    expect(result).toEqual(37);
  })

  test("throw error if size is not included for Cold Sandwiches category", () => {
    items = [
      {
        category: "Cold Sandwiches",
        name: "Rare Roast Beef & Swiss",
        size: null,
        upgradeOption: null,
        quantity: 1
      }
    ];
    expect(() => rootValue.calcTotalPrice({ items })).toThrow("Please include which Rare Roast Beef & Swiss size you want (half or full)");
  })

  test("throw error if amount is not included for Enchiladas category", () => {
    const items = [
      {
        category: "Enchiladas",
        name: "Pepita Crusted Salmon with Chipotle Glaze",
        amount: null,
        quantity: 1
      }
    ];
    expect(() => rootValue.calcTotalPrice({ items })).toThrow("Please include how many Pepita Crusted Salmon with Chipotle Glaze pieces you want (uno, dos, or tres)");
  })
  
})