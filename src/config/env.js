import 'dotenv/config'
import createMySqlRepository from '../repository/mySqlRepository.js';

export const port = Number(process.env.PORT || 3000);
export const database = {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 3306),
    database: process.env.DB_NAME='gt4',
    user: process.env.DB_USER='joao',
    password: process.env.DB_PASSWORD='JPVale120!'
}

export const users = createMySqlRepository('users');
export const addresses = createMySqlRepository('addresses');
export const products = createMySqlRepository('products');
export const carts = createMySqlRepository('carts');
export const orders = createMySqlRepository('orders');