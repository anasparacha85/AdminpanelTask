const express = require('express');
const server = express();
const router = require('./Router/Auth-router');
const servocerouter = require('./Router/Service router');
const adminrouter = require('./Router/Admin-Router');
const shoprouter = require('./Router/Shop-router');
const cors = require('cors');
const errormiddleware = require('./Middleware/error-Middleware');
const dbconnect = require('./utils/db');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');

server.use(cors());
server.use(bodyparser.json());

dotenv.config();

server.get('/api/test', (req, res) => {
    res.json({ message: 'Server is running' });
});

server.use('/api/auth', router);
server.use('/api/Services', servocerouter);
server.use('/api/admin', adminrouter);
server.use('/api/Shop', shoprouter);
server.use(errormiddleware);

dbconnect().then(() => {
    server.listen(process.env.PORT, '0.0.0.0', () => {
        console.log('server started');
    });
});
