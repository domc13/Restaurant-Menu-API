const calcHelper = {

  // calculates cold sandwich price based on size and upgrade options
  calcColdSandwich: (item, menuItem) => {
    let subtotal = 0;
    const selectedSize = item.size;
    const choices = ["half", "full"]

    if (selectedSize === null || !choices.includes(selectedSize)) {
      throw Error(`Please include which ${item.name} size you want (half or full)`);
    } else {
      size_total = selectedSize == "half" ? menuItem.sizes[0].price : menuItem.sizes[1].price;
      subtotal += (size_total * item.quantity);
      if (item.upgradeOption != null) {
        for (let x = 0; x < menuItem.upgrades.length; x++) {
          if (item.upgradeOption == menuItem.upgrades[x].upgradeOption) {
            subtotal += (menuItem.upgrades[x].price * item.quantity);
            break;
          }
        }
      }
    }
    return subtotal;
  },

  // calculates soup cost based on combo selection
  calcSoup: (item, menuItem) => {
    let subtotal = 0;
    if (item.saladOption != null) {
      for (let x = 0; x < menuItem.soupCombo.length; x++) {
        if (menuItem.soupCombo[x].saladOption == item.saladOption) {
          subtotal += ((menuItem.price + menuItem.soupCombo[x].price) * item.quantity);
          break;
        }
      }
    } else {
      subtotal += (menuItem.price * item.quantity);
    }
    return subtotal;
  },

  // calculates enchilada prices based on how many pieces
  calcEnchiladas: (item, menuItem) => {
    let subtotal = 0;
    const selectedAmount = item.amount;
    const choices = ["uno", "dos", "tres"];

    if (selectedAmount == null || !choices.includes(selectedAmount)) {
      throw Error(`Please include how many ${item.name} pieces you want (uno, dos, or tres)`);
    } else {
      for (let x = 0; x < menuItem.amounts.length; x++) {
        if (selectedAmount == menuItem.amounts[x].amount) {
          subtotal += (menuItem.amounts[x].price * item.quantity);
          break;
        }
      }
    }
    return subtotal;
  }

}

const checkHelper = {
  
  // helps check if input category and name are valid
  createMenuItem: (categoryInput, nameInput, menu) => {

    if (!menu[categoryInput]) {
      throw Error(`Category '${categoryInput}' not found. Please check the category name.`);
    }

    let menuItem = menu[categoryInput].find(m => m.name == nameInput);

    if (!menuItem) {
      throw Error(`Menu item not found for ${nameInput} in ${categoryInput}`);
    }

    return menuItem;
  }

}

exports.calcHelper = calcHelper;
exports.checkHelper = checkHelper;