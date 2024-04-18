const {menu} = require('./menu')

const rootValue = { 
  getItemsByCategory: ({ category }) => {
    console.log("Requested Category:", category);
    const items = menu[category];
    if (!items) throw Error("Category not found");
    return items;
  }
};

exports.rootValue = rootValue;