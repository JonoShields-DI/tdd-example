const express = require('express');
const cors = require('cors');

const makeApp = (repository) => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  
  const product = { name : "product1", description: 'This is a description'}
  
  app.get('/test', function(req, res, next) {
    res.json({ title: 'Express' });
  });
  
  app.post('/product', async function(req, res, next) {
    const requestData = req.body
    const result = await repository.createProduct(requestData.name, requestData.description)
    res.status(201).send(result)
  });
  
  app.get('/product', async function(req, res, next) {
    const result = await db.query(`SELECT * FROM example`)
    res.status(200).send(result.rows);
  });

  return app
}

module.exports = {
  makeApp
}