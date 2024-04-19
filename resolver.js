const {menu} = require('./menu')

const rootValue = { 

  // return a specific item on the menu
  getOneItem: ({ item }) => {
    
    if (!menu[item.category]) {
      throw Error(`Category '${item.category}' not found. Please check the category name.`);
    }

    let menuItem = menu[item.category].find(m => m.name == item.name);

    if (!menuItem) {
      throw Error(`Menu item not found for ${item.name} in ${item.category}`);
    }

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

      if (!menu[item.category]) {
        throw Error(`Category '${item.category}' not found. Please check the category name.`);
      }

      let menuItem = menu[item.category].find(m => m.name == item.name);

      if (!menuItem) {
        throw Error(`Menu item not found for ${item.name} in ${item.category}`);
      }

      if (item.category == "Cold Sandwiches") {
        const selectedSize = item.size;
        if (selectedSize === null) {
          throw Error(`Please include which ${item.name} size you want (half or full)`);
        } else {
          size_total = selectedSize == "half" ? menuItem.sizes[0].price : menuItem.sizes[1].price;
          total += (size_total * item.quantity);
          if (item.upgradeOption != null) {
            for (let x = 0; x < menuItem.upgrades.length; x++) {
              if (item.upgradeOption == menuItem.upgrades[x].upgradeOption) {
                total += (menuItem.upgrades[x].price * item.quantity);
                break;
              }
            }
          }
        }
      } else if (item.category == "Soup") {
        if (item.saladOption != null) {
          for (let x = 0; x < menuItem.soupCombo.length; x++) {
            if (menuItem.soupCombo[x].saladOption == item.saladOption) {
              total += ((menuItem.price + menuItem.soupCombo[x].price) * item.quantity);
              break;
            }
          }
        } else {
          total += (menuItem.price * item.quantity);
        }
      } else if (item.category == "Enchiladas") {
        const selectedAmount = item.amount;
        if (selectedAmount == null) {
          throw Error(`Please include how many ${item.name} pieces you want (uno, dos, or tres)`);
        } else {
          for (let x = 0; x < menuItem.amounts.length; x++) {
            if (selectedAmount == menuItem.amounts[x].amount) {
              total += (menuItem.amounts[x].price * item.quantity);
              break;
            }
          }
        }
      } else {
        total += (menuItem.price * item.quantity);
      }
    }

    return total;
  }
};

exports.rootValue = rootValue;