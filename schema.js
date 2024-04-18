const { graphql, buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    hello: String
    age: Int
    getItemsByCategory(category: String!): [MenuItem!]!
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

  type UpgradeOption {
    description: String!
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
    upgrades: [UpgradeOption]
  }
`);

exports.schema = schema;