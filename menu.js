let menu = {
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
        {"sizes": "half", "price": 7.95},
        {"sizes": "full", "price": 9.25}
      ],
      "upgrades": [
        { "description": "Half pasta salad of the day", "price": 1.50 },
        { "description": "French onion soup", "price": 1.50 },
        { "description": "Soup of the day", "price": 1.50 }
      ]
    }
  ]
}

exports.menu = menu