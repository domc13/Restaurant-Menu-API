# Restaurant-Menu-API

<br>

## Installation

1. Clone the repository to your local machine
2. Install dependencies with `npm install`
3. Run `node server.js` to spin up the server

<br>

## Interacting with Features

1.  Go to http://localhost:4000/
2.  Select `Show GraphiQL Explorer` on the left selection on the screen
3.  Add your query in the input field and then execute query for result

<br>

Here are sample queries that can be added to the input field:

```
query {
  getOneItem(item: {
    category: "Green Salads"
    name: "Grilled Red Trout"
    }) {
      name
      description
  }
}
```

```
query {
  getItemsByCategory(category: "Appetizers") {
    name
    description
    price
  }
}
```

```
query {
  getAllItems {
    name
    description
  }
}
```

```
query {
  calcTotalPrice(items: [
  {
    category: "Appetizers",
    name: "Iceberg Wedge Salad with House Cured Bacon",
    quantity:1
  },
  {
    category: "Cold Sandwiches",
    name: "Rare Roast Beef & Swiss",
    size: "full"
    upgradeOption: "French onion soup"
    quantity:1
  },
  {
    category: "Soup",
    name: "Soup of the Day",
    saladOption: "fresh fruit"
    quantity:1
  },
  {
    category: "Enchiladas",
    name: "Pepita Crusted Salmon with Chipotle Glaze",
    amount: "tres"
    quantity:1
  }
  ])
}
```

Additional Notes

1.  `getOneItem`: Returns information for one item on the menu

    - Requires an input of category ("Appetizers", "Entrees", "Cold Sandwiches", "Hot Sandwiches", "Soup", "Fajitas", "Tacos", "Enchiladas", "Quiche" or "Green Salads")
    - Requires an input of name (Can reference name of item through `menu.js`)

2.  `getItemsByCategory`: Returns all items under one input category

    - Requires an input of category ("Appetizers", "Entrees", "Cold Sandwiches", "Hot Sandwiches", "Soup", "Fajitas", "Tacos", "Enchiladas", "Quiche" or "Green Salads")

3.  `getAllItems`: Returns all items on the menu

    - No inputs required

4.  `calcTotalPrice`: Returns total price of items selected from the menu

    - Requires an input of category ("Appetizers", "Entrees", "Cold Sandwiches", "Hot Sandwiches", "Soup", "Fajitas", "Tacos", "Enchiladas", "Quiche" or "Green Salads")
    - Requires an input of name (Can reference name of item through `menu.js`)
    - Requires an input of quantity (>= 1)
    - Only category Cold Sandwiches require an input for size ("half" or "full") and an input for upgradeOption ("Half pasta salad of the day", "French onion soup", "Soup of the day", or null)
    - Only category Soup requires an input for saladOption ("small green salad", "fresh fruit", "house pasta", "half pasta of the day", or null)
    - Only category Enchiladas require an input for amount ("uno", "dos" or "tres")
    - The rest of categories only require category, name, and quantity

<br>

## Testing

1. Run `npm test` to run all tests
