const {menu} = require('./menu');
const { calcHelper, checkHelper } = require('./utils');

const rootValue = { 

  // return a specific item on the menu
  getOneItem: ({ item }) => {
    const menuItem = checkHelper.createMenuItem(item.category, item.name, menu);
    return menuItem;
  },

  // returns all items under a certain catergory
  getItemsByCategory: ({ category }) => {
    const items = menu[category];
    if (!items) throw Error("Category not found");
    return items;
  },

  // returns all items on the menu
  getAllItems: () => {
    const items = [];
    for (const category in menu) {
      for (const item of menu[category]) {
        items.push(item);
      }
    }
    return items
  },

  // calculates total for one or more items ordered
  calcTotalPrice: ({items}) => {
    let total = 0

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const menuItem = checkHelper.createMenuItem(item.category, item.name, menu);

      if (item.category == "Cold Sandwiches") {
        total += calcHelper.calcColdSandwich(item, menuItem);
      } else if (item.category == "Soup") {
        total += calcHelper.calcSoup(item, menuItem);
      } else if (item.category == "Enchiladas") {
        total += calcHelper.calcEnchiladas(item, menuItem);
      } else {
        total += (menuItem.price * item.quantity);
      }
    }

    return total;
  }
};

exports.rootValue = rootValue;