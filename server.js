const { graphql, buildSchema } = require("graphql");
const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const { ruruHTML } = require('ruru/server');
const app = express();

var schema = buildSchema(`
  type Query {
    hello: String
    age: Int
  }
`)
 
var rootValue = { 
  hello: () => {
    return "Hello world!"
  },
  age: () => {
    return 27
  },
}

app.all('/graphql', createHandler({schema, rootValue}));
app.get('/', (_req, res) => {
  res.type('html');
  res.end(ruruHTML({ endpoint: '/graphql'}));
})

app.listen(4000, () => {
  console.log('API running on: http://localhost:4000');
})
