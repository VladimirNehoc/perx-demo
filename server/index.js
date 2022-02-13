const express = require('express');
const _ = require('lodash');

const { getWhereString } = require('./helpers');

const port = 3333;
const host = '0.0.0.0';

const app = express();

const db = require('./database');

app.use(express.static(`${__dirname}/assets`));

app.use((req, res, next) => {
  const origins = [
    'http://localhost:4444',
  ];

  _.forEach(origins, (origin) => {
    if (req.headers.origin?.indexOf(origin) > -1) {
      res.header('Access-Control-Allow-Origin', req.headers.origin);
    }
  });

  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  try {
    res.render('index.html');
  } catch (error) {
    res.send({
      error,
    });
  }
});

app.get('/goods', async (req, res) => {
  try {
    const { query } = req;
    const dealersIds = query.dealers;

    const where = dealersIds
      ? `where id in (${getWhereString(dealersIds)})`
      : '';

    const products = await db.query(`select * from products ${where}`);

    res.send({
      data: products,
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

app.get('/dealers', async (req, res) => {
  try {
    const dealersIds = await db.query('select id from products');

    res.send({
      data: dealersIds,
    });
  } catch (error) {
    res.send({
      error,
    });
  }
});

app.get('/logo/*', (req, res) => {
  try {
    console.log(req.originalUrl);
    res.sendFile(express.static(req.originalUrl));
  } catch (error) {
    res.send({
      error,
    });
  }
});

app.listen(port, host);

console.log(`running on http://${host}:${port}`);
