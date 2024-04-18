const menu = {
  "Appetizers": [
    {
      "name": "Iceberg Wedge Salad with House Cured Bacon",
      "description": "tomato salsa gorgonzola",
      "price": 7.50
    },
    {
      "name": "Sautéed Shredded Brussels Sprouts",
      "description": "bacon hazelnut gorgonzola",
      "price": 6.95
    },
    {
      "name": "Kale Salad",
      "description": "parmesan crisp corn radish garlic-lemon vinaigrette",
      "price": 7.50
    },
    {
      "name": "Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto",
      "description": "grilled tomato salsa crostini",
      "price": 6.95
    },
    {
      "name": "Chicken and Cabbage Eggrolls hot & sour dipping sauce",
      "description": "hot & sour dipping sauce",
      "price": 6.95
    }
  ],
  "Entrees": [
    {
      "name": "Farfalle Pasta with Braised Pork in Tomato Cream",
      "description": "capers butternut squash kale",
      "price": 12.95
    },
    {
      "name": "Stout Braised Bratwurst",
      "description": "horseradish mashed potatoes roasted root veggies grilled onion",
      "price": 13.95
    },
    {
      "name": "Salmon & Crispy Tofu in Yellow Curry Sauce",
      "description": "vegetable sauté golden raisin chutney",
      "price": 15.95
    },
    {
      "name": "Sesame Shrimp",
      "description": "udon noodle ramen broth shiitake mushrooms bean sprouts scallions",
      "price": 13.95
    }
  ],
  "Cold Sandwiches": [
    {
      "name": "Turkey & Avocado",
      "description": "with tomato",
      "breadOption": ["sourdough", "whole wheat", "rye bread"],
      "sizes": [
        {"size": "half", "price": 7.95},
        {"size": "full", "price": 9.25}
      ],
      "upgrades": [
        { "upgradeOption": "Half pasta salad of the day", "price": 1.50 },
        { "upgradeOption": "French onion soup", "price": 1.50 },
        { "upgradeOption": "Soup of the day", "price": 1.50 }
      ]
    },
    {
      "name": "Pub Club",
      "description": "turkey, bacon, lettuce, tomato",
      "breadOption": ["sourdough", "whole wheat", "rye bread"],
      "sizes": [
        {"size": "half", "price": 7.95},
        {"size": "full", "price": 9.25}
      ],
      "upgrades": [
        { "upgradeOption": "1/2 pasta salad of the day", "price": 1.50 },
        { "upgradeOption": "French onion soup", "price": 1.50 },
        { "upgradeOption": "Soup of the day", "price": 1.50 }
      ]
    },
    {
      "name": "Rare Roast Beef & Swiss",
      "description": "sweet-hot mustard, lettuce, red onion",
      "breadOption": ["sourdough", "whole wheat", "rye bread"],
      "sizes": [
        {"size": "half", "price": 7.95},
        {"size": "full", "price": 9.25}
      ],
      "upgrades": [
        { "upgradeOption": "Half pasta salad of the day", "price": 1.50 },
        { "upgradeOption": "French onion soup", "price": 1.50 },
        { "upgradeOption": "Soup of the day", "price": 1.50 }
      ]
    },
    {
      "name": "Veggie",
      "description": "pepper jack, avocado, sprout, tomato",
      "breadOption": ["sourdough", "whole wheat", "rye bread"],
      "sizes": [
        {"size": "half", "price": 7.95},
        {"size": "full", "price": 9.25}
      ],
      "upgrades": [
        { "upgradeOption": "Half pasta salad of the day", "price": 1.50 },
        { "upgradeOption": "French onion soup", "price": 1.50 },
        { "upgradeOption": "Soup of the day", "price": 1.50 }
      ]
    }
  ],
  "Hot Sandwiches": [
    {
      "name": "Southwest Chicken Breast",
      "description": "Grilled onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese",
      "breadOption": ["wheat", "cheese & onion bun"],
      "price": 9.50
    },
    {
      "name": "Portobello Fresh Mozzarella",
      "description": "Caramelized Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli",
      "breadOption": ["wheat", "cheese & onion bun"],
      "price": 9.50
    },
    {
      "name": "Chipotle BBQ Pork Sandwich",
      "description": "Pickled Jalapeño Slaw",
      "breadOption": ["wheat", "cheese & onion bun"],
      "price": 9.50
    },
    {
      "name": "Bacon Burger",
      "description": "Swiss, Lettuce, Tomato",
      "breadOption": ["wheat", "cheese & onion bun"],
      "price": 9.25
    },
    {
      "name": "Mexi Burger",
      "description": "Perpper Relish, Pepper Jack, Tomato, Lettuce, Guacamole",
      "breadOption": ["wheat", "cheese & onion bun"],
      "price": 9.25
    },
    {
      "name": "Herb Marinated Top Sirloin",
      "description": "Crimini Mushrooms, Caramelized Onion, Gorgonzola, Basil Aioli, Served Open Faced on Fococcia",
      "breadOption": ["wheat", "cheese & onion bun"],
      "price": 10.95
    },
    {
      "name": "Roast Beef with Ancho Au Jus",
      "description": "Jack Cheese, Grilled Onions, Served on Crumb Bros. Baguette",
      "breadOption": ["wheat", "cheese & onion bun"],
      "price": 9.75
    },
    {
      "name": "Blackened Catfish",
      "description": "Creole Peppers & Onions, Fresh Herb Aioli, Served on house made Sourdough",
      "breadOption": ["wheat", "cheese & onion bun"],
      "price": 9.75
    }
  ], 
  "Soup": [
    {
      "name": "French Onion Soup",
      "price": 4.95,
      "soupCombo": [
        {"saladOption": "small green salad", "price": 2.3},
        {"saladOption": "fresh fruit", "price": 2.3},
        {"saladOption": "house pasta", "price": 2.3},
        {"saladOption": "half pasta of the day", "price": 3.8},
      ]
    },
    {
      "name": "Soup of the Day",
      "price": 4.95,
      "soupCombo": [
        {"saladOption": "small green salad", "price": 2.3},
        {"saladOption": "fresh fruit", "price": 2.3},
        {"saladOption": "house pasta", "price": 2.3},
        {"saladOption": "half pasta of the day", "price": 3.8},
      ]
    }
  ],
  "Fajitas": [
    {
      "name": "Chicken",
      "description": "Poblano and Bell Peppers, Guacamole, Two Salsas, red rice, black beans, grilled tomato salad, corn or flour tortillas",
      "price": 10.95
    },
    {
      "name": "Sirloin Steak",
      "description": "Onions, Poblano and Bell Peppers, Carrots, Onions, Guacamole, Two Salsas, red rice, black beans, grilled tomato salad, corn or flour tortillas",
      "price": 10.95
    }
  ], 
  "Tacos": [
    {
      "name": "Beer Battered Fish",
      "description": "Jalapeño Remoulade, Roasted Salsa, Cabbage",
      "price": 9.95
    },
    {
      "name": "Carne Asada",
      "description": "(marinated sirloin), Guacamole, Tomatillo Salsa",
      "price": 9.95
    },
    {
      "name": "Citrus Marinated Chicken",
      "description": "Guacamole, Tomatillo Salsa",
      "price": 9.95
    },
    {
      "name": "Grilled Veggie",
      "description": "Zucchini, Yellow Squash, Bell Peppers, Onion, Guacamole, Tomatillo Salsa",
      "price": 9.95
    }
  ], 
  "Enchiladas": [
    {
      "name": "Chili Relleno Stuffed with Jack Cheese & Corn Glazed Yam, Chayote Squash Succotash, Red Chili",
      "description": "Southwestern Succotash, Black Beans with Chipotle Crema",
      "amounts": [
        {"amount": "uno", "price": 8.50},
        {"amount": "dos", "price": 9.95},
        {"amount": "tres", "price": 11.50},
      ]
    },
    {
      "name": "Pepita Crusted Salmon with Chipotle Glaze",
      "description": "chevre whipped yams, jicama slaw, tomatillo sauce, Southwestern Succotash, Black Beans with Chipotle Crema",
      "amounts": [
        {"amount": "uno", "price": 8.50},
        {"amount": "dos", "price": 9.95},
        {"amount": "tres", "price": 11.50},
      ]
    }
  ], 
  "Quiche": [
    {
      "name": "Bacon Quiche",
      "description": "choice of Fresh Fruit or Green Salad",
      "price": 8.95
    },
    {
      "name": "Swiss Quiche",
      "description": "choice of Fresh Fruit or Green Salad",
      "price": 8.95
    },
    {
      "name": "Zucchini Quiche",
      "description": "choice of Fresh Fruit or Green Salad",
      "price": 8.95
    },
    {
      "name": "Mushroom Quiche",
      "description": "choice of Fresh Fruit or Green Salad",
      "price": 8.95
    }
  ],
  "Green Salads": [
    {
      "name": "Grilled Red Trout",
      "description": "Lentils, Tomatoes, Cukes, Green Beans, Red Bells, Almonds, Sundried Tomato Vinaigrette",
      "price": 10.95
    },
    {
      "name": "Smoked Turkey",
      "description": "Cheese Tortellini, Bacon, Tomato, Cucumber, Egg, Black Bean-Corn Salsa, Avocado",
      "price": 9.95
    },
    {
      "name": "Asian Grilled Chicken",
      "description": "Snow Peas, Carrot Slaw, Red Bells, Water Chestnut, Peanuts, Baby Corn, Cilantro, Cukes, Spicy Dressing",
      "price": 10.50
    },
    {
      "name": "Southwest Grilled Chicken",
      "description": "Tomato, Guacamole, pepitas, Jicama, Corn & Black Bean Salsa, Orange Wedges, Spicy Citrus Vinaigrette",
      "price": 10.50
    },
    {
      "name": "Mediterranean Italian Sausage",
      "description": "Artichoke Heart, Green Beans, Roma Tomato, Kalamatas, Red Onion, Cucumber, Croutons, Parmesan, Fresh Mozzarella, Gorgonzola Vinaigrette",
      "price": 9.95
    },
    {
      "name": "Grilled Salmon",
      "description": "Artichoke tapenade, shredded kale, corn, radish, parmesan crisp",
      "price": 10.95
    }
  ]
}

exports.menu = menu