const { graphql, buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    hello: String
    age: Int
    getOneItem(item: GetOneItemInput!): MenuItem!
    getItemsByCategory(category: String!): [MenuItem!]!
    getAllItems: [MenuItem!]!
    calcTotalPrice(items: [itemPriceInput!]!): Float!
  }

  input GetOneItemInput {
    category: String!
    name: String!
  }

  input itemPriceInput {
    category: String!
    name: String!
    size: String
    upgradeOption: String
    saladOption: String
    amount: String
    quantity: Int!
  }

  type MenuItem {
    name: String!
    description: String
    price: Float
  }

  type Appetizers {
    name: String!
    description: String!
    price: Float!
  }

  type Entrees {
    name: String!
    description: String!
    price: Float!
  }

  type UpgradeOptions {
    upgradeOption: String!
    price: Float!
  }
  
  type SandwichSize {
    size: String!
    price: Float!
  }

  type ColdSandwich {
    name: String!
    description: String!
    breadOption: [String!]!
    sizes: [SandwichSize!]!
    upgrades: [UpgradeOptions]
  }

  type HotSandwich {
    name: String!
    description: String!
    breadOption: [String!]!
    price: Float!
  }

  type SaladOption {
    saladOption: String!
    price: Float!
  }

  type Soup {
    name: String!
    price: Float
    soupCombo: [SaladOption!]!
  }

  type Fajitas {
    name: String!
    description: String!
    price: Float!
  }

  type Tacos {
    name: String!
    description: String!
    price: Float!
  }

  type AmountOption {
    amount: String!
    price: Float!
  }

  type Enchiladas {
    name: String!
    description: String!
    amounts: [AmountOption!]!
  }

  type Quiche {
    name: String!
    description: String!
    price: Float!
  }

  type GreenSalads {
    name: String!
    description: String!
    price: Float!
  }

`);

exports.schema = schema;