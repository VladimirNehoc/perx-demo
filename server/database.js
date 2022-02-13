const pgp = require('pg-promise')();
const _ = require('lodash');

const db = pgp('postgres://perx:password@postgres:5432/perx');

const products = [
  { name: 'Python', price: 5.35, image: '/logo/python.png' },
  { name: 'Go', price: 7.55, image: '/logo/go.png' },
  { name: 'Node.js', price: 9.99, image: '/logo/node.png' },
  { name: 'C#', price: 9.99, image: '/logo/ch.png' },
  { name: 'VS Code', price: 10.25, image: '/logo/code.png' },
  { name: 'Sublime', price: 17.4, image: '/logo/sublime.png' },
  { name: 'Vim', price: 99.99, image: '/logo/vim.png' },
  { name: 'WebStorm', price: 33.43, image: '/logo/webstorm.png' },
  { name: 'Vue', price: 50.35, image: '/logo/vue.png' },
  { name: 'React', price: 66.6, image: '/logo/react.png' },
  { name: 'Angular', price: 3.75, image: '/logo/angular.png' },
  { name: 'Sass', price: 11.11, image: '/logo/sass.png' },
];

const generateDatabase = async () => {
  await db.query('DROP SCHEMA public CASCADE; CREATE SCHEMA public;')
    .catch((error) => {
      console.log(error);
    });

  await db.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    .catch((error) => {
      console.log(error);
    });

  await db.none('CREATE TABLE products (id uuid DEFAULT gen_random_uuid() PRIMARY KEY, name varchar(20) NOT NULL, price int NOT NULL, image varchar);')
    .then(() => {
      console.log('Created table products');
    })
    .catch((error) => {
      console.log(error);
    });

  _.forEach(products, (product) => {
    const query = `insert into products (name, price, image) values('${product.name}', ${product.price}, '${product.image}');`;

    db.query(query)
      .then(() => {
        console.log(`Created product ${product.name}`);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

generateDatabase();

module.exports = db;
