const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const USER_ROUTES = require('./routes.js');

ROUTER.use('/', USER_ROUTES);

module.exports = ROUTER;