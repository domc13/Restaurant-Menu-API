const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const { ruruHTML } = require('ruru/server');
const { rootValue } = require('./resolver');
const { schema } = require("./schema");
const app = express();


app.all('/graphql', createHandler({schema, rootValue}));

// using Ruru GraphiQL interface to visualize query
app.get('/', (_req, res) => {
  res.type('html');
  res.end(ruruHTML({ endpoint: '/graphql'}));
})

app.listen(4000, () => {
  console.log('API running on: http://localhost:4000');
})
