const axios = require('axios');
const url = require('../visual-recognition').url;
module.exports = axios.default.create({
  baseURL: url
})