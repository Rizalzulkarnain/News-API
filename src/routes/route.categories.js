const express = require('express');
const router = express.Router();
const axios = require('axios');

// Config Defaults Axios dengan Detail Akun Rajaongkir
axios.defaults.baseURL = 'https://today.line.me/id/portaljson';
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

router.get('/v1/categories', (req, res) => {
  axios
    .get('/')
    .then((response) => res.json(response.data))
    .catch((err) => res.send(err));
});

module.exports = router;
